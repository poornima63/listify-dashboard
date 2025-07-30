import { useState } from "react";
import ListContext from "./listContext"
import { baseUrls } from "../../baseUrls";
import { toast } from "react-toastify";


function ListState({ children }) {
  const [allList, setAllList] = useState([]);
  const addListFun = async (list, image, setListing) => {
    const formdata = new FormData()
    formdata.append("title",list.title)
    formdata.append("description", list.description);
    formdata.append("price", list.price);
    formdata.append("location", list.location);
    formdata.append("country", list.country);
    formdata.append("image", image);
    console.log(image)    
    
    try {
      const response = await fetch(`${baseUrls}/api/v2.3/post/addlist`, {
        method: "POST",
        headers: {
         
          "auth-token": localStorage.getItem("token"),
        },
        body: formdata,
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        toast.success(data.message);
        setListing({
          title: "",
          description: "",
          price: "",
          location: "",
          country: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error("internal server error");
    }
  };

  // const addListFun = async (list, setListing) => {
  //   try {
  //     const response = await fetch(`${baseUrls}/api/v2.3/post/addlist`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "auth-token": localStorage.getItem("token"),
  //       },
  //       body: JSON.stringify(list),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     if (data.success) {
  //       toast.success(data.message);
  //       setListing({
  //         title: "",
  //         description: "",
  //         price: "",
  //         location: "",
  //         country: "",
  //       });
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     toast.error("internal server error");
  //   }
  // };

  const getAllList = async () => {
    const response = await fetch(`${baseUrls}/api/v2.3/post/alllist`);
    const data = await response.json();
    console.log(data);
    if (data.success) {
      
      setAllList(data.results);
    }
  };
  const yourPost = async()=>{
    
    try {
      const response = await fetch(`${baseUrls}/api/v2.3/post/yourlist`,{
       method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
    
      if(data.success){
     
        setAllList(data.total_results)
      }
    } catch (error) {
      console.log("not getting",error)
    }
  }
  


  const updatePostFun = async (update, id, image, handleClose) => {
  const formdata = new FormData();

  formdata.append("title", update.utitle);
  formdata.append("description", update.udescription);
  formdata.append("price", update.uprice);
  formdata.append("location", update.ulocation);
  formdata.append("country", update.ucountry);

  // Append image if user selects a new one
  
    formdata.append("image", image);


  try {
    const response = await fetch(`${baseUrls}/api/v2.3/post/updatelist/${id}`, {
      method: "PUT",
      headers: {
        "auth-token": localStorage.getItem("token"),
        // ❌ Do NOT add "Content-Type" here — let browser set it for FormData
      },
      body: formdata,
    });

    const data = await response.json();

    if (data.success) {
      toast.success(data.message);
      yourPost(); // Refresh posts
      handleClose(); // Close modal or form
    } else {
      toast.error(data.message);
    }

  } catch (error) {
    console.error(error);
    toast.error("Internal server error");
  }
};

  // const updatePostFun = async (update,id, handleClose)=>{
  //    const myObj = {
  //     title: update.utitle,
  //     description: update.udescription,
  //     price: update.uprice,
  //     location: update.ulocation,
  //     country: update.ucountry,
  //   };
  //   try {
  //     const response = await fetch(`${baseUrls}/api/v2.3/post/updatelist/${id}`,{
  //        method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "auth-token": localStorage.getItem("token"),

  //       },
  //       body:JSON.stringify(myObj)
  //     });
  //     const data = await response.json();
  //     if (data.success) {
              
  //             toast.success(data.message);
  //             yourPost();
  //             handleClose();
  //           } else {
  //             toast.error(data.message);
  //           }
    

  //   } catch (error) {
  //     console.log(error)
  //     toast.error("internal server error", error)
  //   }

  // }

  const deletePost =async (listid)=>{
    try {
      const post = await fetch(`${baseUrls}/api/v2.3/post/deletelist/${listid}`,{
       method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const data =  await post.json()
      if(data.success){
        toast.success("Delete list successfully")
        yourPost()
      }
      
    } catch (error) {
      
      toast.error("failed to delete something went wrong",error)
    }
  }

  // like list
  const likePost = async (listid)=>{
    try {
      const  response = await fetch(`${baseUrls}/api/v2.3/post/like/${listid}`,{
       method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const data =  await response.json()
      if(data.success){
         setAllList(prevList =>
        prevList.map(post =>
          post._id === data.post._id ? data.post : post
        )
      );
        console.log(data.message)

      }
    } catch (error) {
      console.log("error in like",error)
    }
  }
  return (
    <ListContext.Provider value={{ allList, getAllList, addListFun ,yourPost, updatePostFun, deletePost,likePost}}>
      {children}
    </ListContext.Provider>
  );
}

export default ListState;
