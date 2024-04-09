import React from "react";

interface CardWrapperProps {
	children: React.ReactNode;
	className?: string;
}

const CardWrapper = ({ children, className }: CardWrapperProps) => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className={`p-6 rounded-3xl shadow-lg bg-white ${className}`}>
				{children}
			</div>
		</div>
	);
};

export default CardWrapper;
