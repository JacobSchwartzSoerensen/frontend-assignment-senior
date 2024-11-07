import { FC, FormEvent, useState } from "react";
import './index.scss';

interface FormSchema {
  name?: string;
  email?: string;
  hasPet?: boolean;
  petName?: string;
}

const Task3: FC = () => {
  // Create formData state with name, email etc.
  const [formData, setFormData] = useState<FormSchema>({ name: '', email: '', hasPet: false, petName: '' });
  // handle errors state
  const [errors, setErrors] = useState<FormSchema>({});

  // Create a validate function to check if name, email etc. are not empty
  const validate = () => {
    const errors: FormSchema = {};

    if (!formData.name) {
      errors.name = 'Name must be provided';
    }

    if (!formData.email) {
      errors.email = 'Email must be provided';
    }

    if (formData.hasPet && !formData.petName) {
      errors.petName = 'We must know the name of the pet!!!';
    }

    setErrors(errors);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    validate();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </label>
        {errors.name}
        <label>
          Email
          <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </label>
        {errors.email}
        <label>
          Has pet
          <input type="checkbox" checked={formData.hasPet} onChange={(e) => setFormData({...formData, hasPet: e.target.checked})} />
        </label>
        {errors.hasPet}
        {formData.hasPet && (<label>
          Pet name
          <input type="text" value={formData.petName} onChange={(e) => setFormData({...formData, petName: e.target.value})} />
        </label>)}
        {errors.petName}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Task3;