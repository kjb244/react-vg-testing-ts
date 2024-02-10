import React, {FC, InputHTMLAttributes, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";


interface ToDoItem {
    description: string;
    complete: boolean;
}

const todoList: ToDoItem[] = [
    { description: 'visit museum', complete: true},
    { description: 'visit bar', complete: false}
]

function View4(){
    const [todoItems, setTodoItems] = useState<ToDoItem[]>(todoList);

    function addItem(description: string){
        setTodoItems([...todoItems, {description: description, complete: false}])
    }
    function deleteTodoItem(item: ToDoItem){
        const index = todoItems.findIndex(x => x.description === item.description);
        setTodoItems(todoItems.filter((e,i) => i !== index));
    }

    function editTodoItem(item: ToDoItem, index: number){
        setTodoItems(todoItems.map((e, i) =>{
            if (index === i){
                return item;
            }
            return e;
        }))
    }
    return (
        <>
            <h3>Prague Itinerary</h3>
            <AddTask addItem={addItem}/>
            <ShowItems todoItems={todoItems} deleteTodoItem={deleteTodoItem} editTodoItem={editTodoItem}/>
        </>
    )
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    todoItems: ToDoItem[],
    deleteTodoItem: (item: ToDoItem) => void,
    editTodoItem: (item: ToDoItem, index: number) => void
}

const ShowItems: FC<InputProps> = ({todoItems, deleteTodoItem, editTodoItem}) =>{
    const [editingItem, setEditingItem] = useState<Boolean[]>([]);
    useEffect(() =>{
        setEditingItem(todoItems.map(() => false))
    }, [todoItems.length])

    function setEditingItemHelper(index: number) {
        setEditingItem(editingItem.map((e, i) =>{
            return i === index ? !e: e;
        }))
    }

    return (
        <>
            {todoItems.map((item,i) =>{
                return (
                    <div key={i} className="mt-3" style={{display: 'flex'}}>
                        <Form.Check
                            type='checkbox'
                            checked={item.complete}
                            style={{marginRight: '10px'}}
                            id={`cb-${i}`}
                            onChange={(e) =>{
                                editTodoItem({...item, complete: e.currentTarget.checked}, i)
                            }}
                        />

                        {!editingItem[i] && <div>{item.description}</div>}
                        {!editingItem[i] &&
                            <Button variant="primary" style={{marginLeft: '10px'}} onClick={() =>{
                            setEditingItemHelper(i)
                            }}
                            >Edit</Button>
                        }
                        {editingItem[i] &&
                            <Form.Control type="text" style={{marginLeft: '10px'}} value={item.description}
                                onInput={(e) =>{
                                    editTodoItem({...item, description: e.currentTarget.value}, i);
                                 }}
                            />
                        }
                        {editingItem[i] &&
                            <Button variant="primary" style={{marginLeft: '10px'}} onClick={() =>{
                            setEditingItemHelper(i);
                            }}
                            >Save</Button>
                        }

                        <Button variant="primary" style={{marginLeft: '10px'}} onClick={() =>{deleteTodoItem(item)}}>Delete</Button>



                    </div>

                )
            })}


        </>
    )
}


// @ts-ignore
function AddTask({addItem}){
    const [item, setItem] = useState('');
    return (
        <>
            <Row>
                <Col sm={6}>
                    <Form.Control type="text" value={item} placeholder="add a task" onInput={(e) =>setItem(e.currentTarget.value)}/>
                </Col>
                <Col sm={6}>
                    <Button disabled={item.length < 1} variant="primary" onClick={() =>{
                        addItem(item);
                        setItem('');
                    }}
                    >Add</Button>
                </Col>
            </Row>

        </>
    )
}

export default View4;