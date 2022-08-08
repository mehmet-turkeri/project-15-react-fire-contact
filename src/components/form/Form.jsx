import { useEffect } from 'react';
import {set, ref, push, onValue, update} from "firebase/database";
import {db} from "../../utils/firebase";
import {toastSuccessNotify, toastWarnNotify} from "../../utils/customToastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const InputForm = ({setContacts, edit, setEdit, name, setName, phone, setPhone, gender, setGender, id}) => {
  const writeDatabase = (e) => {
    e.preventDefault();
    edit ? updateUser({name: name, phone: phone, gender: gender, id: id}) : addUser();
  };

  const addUser = () => {
    const contactRef = ref(db, "Contacts");
    const newContactRef = push(contactRef);
    set(newContactRef, {name: name, phone: phone, gender: gender});
    setName("");
    setPhone("");
    setGender("");
    toastSuccessNotify("Kayıt başarı ile eklendi.");
    setEdit(false);  
  };

  useEffect(() => {
    const userRef = ref(db, "Contacts");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const contactArray = [];
      for (let id in data) {
        contactArray.push({id, ...data[id],});
      }      
      setContacts(contactArray);
    });
  }, []);

  const updateUser = (e) => {
    const updates = {};
    updates["Contacts/" + e.id] = e;    
    setName("");
    setPhone("");
    setGender("");
    toastWarnNotify("Kayıt başarı ile güncellendi.");
    setEdit(false);

    return update(ref(db), updates);
  };

  return (
    <div>
    <div className="inputcontainer bg-light p-4 m-2">
        <h1 className="mb-3 text-center">ADD CONTACT</h1>
        <Form onSubmit={writeDatabase}>
          <fieldset>
            <Form.Group className="mb-3">
              <Form.Control
                id="TextInput"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="NumberInput"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                className="input-box"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            {edit ? (
              <Button className="button" type="submit">UPDATE</Button>
            ) : (
              <Button className="button" type="submit">ADD</Button>
            )}
          </fieldset>
        </Form>
      </div>
    </div>
  );
};

export default InputForm