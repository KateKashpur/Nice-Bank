import React from "react";
import col from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {ErrorMessageWrapper} from "../../../Utils/Validators/Validators";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post value={p.message} likesCount={p.likesCount} />
  ));

//  let newPostElement = React.createRef();

 // let onAddPost = () => {
 //   props.addPost();
 // };

  //let onPostChange = () => {
  //  let text = newPostElement.current.value;
 //   props.updateNewPostText(text);
 // };

  return (
    <div className={col.postsBlock}>
      <h3 className={col.h3}>My posts</h3>
      <AddNewPostForm
            addPost={props.addPost}
         />
      
      <div className={col.posts}>{postsElements}</div>
    </div>
  );
};
const AddNewPostForm = (props) => {

  const validationSchema = Yup.object().shape( {

     newPostText: Yup.string()
        .min( 2, "Must be longer than 2 characters !" )
        .max( 5, "Must be shorter than 5 characters !" )
        .required( "Required !" )
  } );

  const OnAddPost = (values) => {
     props.addPost( values );
  }

  return (
     <Formik
        initialValues={{
           newPostText: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
           OnAddPost( values.newPostText );
           resetForm( {values: ''} );
        }}
     >
        {() => (
           <Form>
              <div>
                 <Field
                    name={'newPostText'}
                    as={'textarea'}
                    placeholder={'enter text 1'}
                 />
              </div>

              <ErrorMessage name="newPostText">
                 {ErrorMessageWrapper}
              </ErrorMessage>

              <button type={'submit'}>Add posts</button>
           </Form>
        )}
     </Formik>
  )
}



export default MyPosts;
