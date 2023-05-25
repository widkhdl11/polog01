import { Form, Link } from 'react-router-dom';
import classes from './PostForm.module.css'

const PostForm = () => {


    return(
        <Form className={classes.form} >
            <input
                id="title"
                type="text"
                name="title"
                required
            //defaultValue={event ? event.title : ''}
            className={classes.title}/>
            <textarea
                id="content"
                name="content"
                required
            //defaultValue={event ? event.title : ''}
            className={classes.content}
            />
            <menu  className={classes.menu}>
                <button className={classes["temp-btn"]} to ="edit">임시저장</button>
                <Link className={classes["load-btn"]} to ="edit">불러오기</Link>
                <button className={classes["write-btn"]} to ="edit">등록</button>
            </menu>
        </Form>
    )
}
export default PostForm;