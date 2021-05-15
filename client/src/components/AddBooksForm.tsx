import {useState, FormEvent} from 'react'

interface Props {
    onAdd: (book: {title: string}) => void;
}

const AddBooksForm = ({onAdd}: Props) => {
    const [title, setTitle] = useState('')

    const handleSubmit= (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAdd({title: title})
    }
    return (
        <form onSubmit={handleSubmit}>
          <label >Song name:</label>  
          <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
          <input type="submit" value="add book"/>
        </form>
    )
}

export default AddBooksForm
