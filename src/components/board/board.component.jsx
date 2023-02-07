import React from "react";
import { Square } from "../square/square.component";
export class Board extends React.Component {
	renderSquare(i) {
		return <Square key={Math.random()} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
	}

	render() {
		let index = -1;
		return (
			<div>
				{[...Array(3)].map((value, i) => (
					<div key={Math.random()} className="board-row">
						{[...Array(3)].map(() => {
							index++;
							return this.renderSquare(index);
						})}
					</div>
				))}
			</div>
		);
	}
}
