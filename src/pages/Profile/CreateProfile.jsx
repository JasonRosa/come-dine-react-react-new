import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

function CreateProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [host, setHost] = useState("");
  const [email, setEmail] = useState("");

  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);

  const handleHost = (e) => setHost(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleDescription = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");
    const body = { firstName, lastName, host, email, description };

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/profile/edit/${id}`, body, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then(() => {
        setFirstName("");
        setLastName("");

        setHost("");
        setEmail("");

        setDescription("");
        navigate(`/profile/${id}`);
      })
      .catch((err) => console.log(err));
  };
  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    const storedToken = localStorage.getItem("authToken");
    const formData = new FormData();
    formData.append("imgUrl", e.target.files[0]);
    formData.append("id", id);

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/profile/image-upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        setImageUrl(res.data.imgUrl);
      })
      .catch((err) => console.log(err));
  };
  const buildImgTag = () => {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <img className="thumbnail" src={this.state.imageURI}></img>
        </div>
      </div>
    );
  };
  return (
    <div className="create-prof-div">
      <form onSubmit={handleSubmit} className="CreateProfile">
        <label htmlFor="firstName"></label>
        <input
          className="create-prof-inputs"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
        />

        <label htmlFor="lastName"></label>
        <input
          className="create-prof-inputs"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={handleLastName}
        />

        <div className="email">
          <label htmlFor="email"></label>
          <input
            className="create-prof-inputs"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="host">
          <label htmlFor="host">Host</label>
          <input
            className="create-prof-inputs"
            type="radio"
            name="host"
            value={host}
            onChange={handleHost}
          />
        </div>

        <label htmlFor="description"></label>
        <textarea
          rows="12"
          cols="35"
          className="textarea"
          placeholder="Description"
          name="description"
          value={description}
          onChange={handleDescription}
        />
        <div>
          <input type="file" onChange={onFileChange} name="files" />
          {imageUrl && (
            <div >
              <div className="small-9 small-centered columns">
                <img className="thumbnail" src={imageUrl} height={50} style={{display:'flex',justifyContent:'center',margin:'20px auto'}}></img>
              </div>
            </div>
          )}
        </div>

        <div>
          <button className="create-prof-button" type="submit">
            Create Profile
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateProfile;
