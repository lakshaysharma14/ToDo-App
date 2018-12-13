import React, { Component } from 'react';

const Todos = ({todos,deleteTodo}) =>
{

	const td=todos.length ?(
		todos.map(todo =>{
			return(
					<div className="collection-item" key={todo.id}>
						<span onClick={ ()=> {deleteTodo(todo.id)}}>{todo.content}</span>
					</div>		
				 )
			})
		):(
			<p className="center black-text">you have no todos left</p>
		   )
		
		return(
 			<div className='todos collection'>
 				{td}
 			</div>
		)
}
export default Todos;

