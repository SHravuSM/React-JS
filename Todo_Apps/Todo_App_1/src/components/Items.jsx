import Todo_items from './todo_items';

export default function Items({ item, handleDelete}) {
    return (
        <>
            {item.map((item) => (
                <Todo_items onDelete ={handleDelete}  key={item.task} task={item.task} date={item.date} />
            ))}
        </>
    )
}