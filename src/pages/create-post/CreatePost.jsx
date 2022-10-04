import { useState } from "react";
import s from "./CreatePost.module.scss";
import { INPUTS } from "./inputs";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../hooks/firebase-config";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [file, setFile] = useState(null);

  const [section, setSection] = useState(null);
  const [sectionImgPreview, setSectionImgPreview] = useState(null);
  const [sectionArray, setSectionArray] = useState([]);

  const HANDLE_INPUTS = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const HANDLE_FILE = async (e) => {
    const file = e.target.files[0];
    setFile(URL.createObjectURL(file));

    const storageRef = ref(storage, file.name + Math.random());
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);

          setPost({ ...post, projectImg: downloadURL });
        });
      }
    );
  };

  const HANDLE_SECTION = (e) => {
    setSection({ ...section, [e.target.name]: e.target.value });
  };

  const HANDLE_SECTION_FILE = (e) => {
    const file = e.target.files[0];
    setSectionImgPreview(URL.createObjectURL(file));

    const storageRef = ref(storage, file.name + Math.random());
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);

          setSection({ ...section, img: downloadURL });
        });
      }
    );
  };

  const HANDLE_ADD_SECTION = (e) => {
    e.preventDefault();
    setSectionArray((prev) => [...prev, section]);
    setPost({ ...post, explanation: [...sectionArray, section] });
    setSection("");
    setSectionImgPreview(null);
    e.target.reset();
  };

  const SUBMIT_POST = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "projects"), post);
    console.log("Document written with ID: ", docRef.id);
    navigate(`/project/${docRef.id}`);
  };
  console.log(post);
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.headerLeft}>
          {INPUTS.map((item, index) => {
            if (item.name == "overview") {
              return (
                <textarea
                  key={index}
                  placeholder={item.placeholder}
                  name={item.name}
                  className={item.name}
                  cols={70}
                  rows={7}
                  onChange={HANDLE_INPUTS}
                />
              );
            } else
              return (
                <input
                  type={item?.type}
                  name={item?.name}
                  placeholder={item?.placeholder}
                  key={index}
                  onChange={HANDLE_INPUTS}
                  className={item.name}
                />
              );
          })}
          <label htmlFor="file">Upload project img</label>
        </div>
        <div className={s.headerCenter}>{file && <img src={file} />}</div>
        <input
          type={"file"}
          name="file"
          onChange={HANDLE_FILE}
          className={s.file1}
          id="file"
        />
      </div>
      <button className={s.btn} onClick={SUBMIT_POST}>
        Submit Project
      </button>

      <form className={s.section} onSubmit={HANDLE_ADD_SECTION}>
        {post.explanation?.map((item, index) => {
          return (
            <div className={s.renderedSection} key={index}>
              <h2>{item?.title}</h2>
              <p>{item?.description}</p>
              <img src={item?.img} alt="img" />
            </div>
          );
        })}

        <input
          name="title"
          onChange={HANDLE_SECTION}
          placeholder="subtitle of section"
          className={s.title}
        />
        <textarea
          name="description"
          onChange={HANDLE_SECTION}
          placeholder="description of section"
          cols={50}
          rows={5}
          className={s.description}
        />

        {sectionImgPreview && (
          <img
            src={sectionImgPreview}
            alt="preview of file uploaded"
            className={s.previewimg}
          />
        )}

        <label htmlFor="filesection">upload img to section </label>
        <input
          type="file"
          name="img"
          onChange={HANDLE_SECTION_FILE}
          className={s.file}
          id="filesection"
        />

        {section && <button className={s.btn}>add another section</button>}
      </form>
    </div>
  );
}
