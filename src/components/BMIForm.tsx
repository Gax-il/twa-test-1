import React, { useState, ChangeEvent, FormEvent } from "react";
import { CalculateBMI, BMIStateColor, BMIStateName } from "../utils/bmi";

interface BMIValues {
	weight: number;
	height: number;
	name: string;
}

const BMIForm: React.FC = () => {
	const [BMIValues, setBMIValues] = useState<BMIValues>({
		weight: 0,
		height: 0,
		name: "",
	});

	const [calculatedBMI, setCalculatedBMI] = useState<number | null>(null);
	const [bmiState, setBMIState] = useState<number | null>(null);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setBMIValues({
			...BMIValues,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const bmiResult = CalculateBMI({ values: BMIValues });

		console.log("tady je ten skvelej objekt", BMIValues);
		setCalculatedBMI(bmiResult.value);
		setBMIState(bmiResult.state);
	};

	return (
		<div className="mx-auto max-w-lg">
			<h2 className="text-2xl font-semibold mb-4">BMI Kalkulačka</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className="block mb-2">
						Jméno:
						<input
							type="text"
							name="name"
							value={BMIValues.name}
							onChange={handleChange}
							className="border border-gray-300 rounded px-3 py-2 w-full mt-1"
						/>
					</label>
				</div>
				<div className="mb-4">
					<label className="block mb-2">
						Váha (kg):
						<input
							type="number"
							name="weight"
							value={BMIValues.weight}
							onChange={handleChange}
							className="border border-gray-300 rounded px-3 py-2 w-full mt-1"
						/>
					</label>
				</div>
				<div className="mb-4">
					<label className="block mb-2">
						Výška (cm):
						<input
							type="number"
							name="height"
							value={BMIValues.height}
							onChange={handleChange}
							className="border border-gray-300 rounded px-3 py-2 w-full mt-1"
						/>
					</label>
				</div>
				<button
					type="submit"
					className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
				>
					Vypočítat BMI
				</button>
			</form>
			{calculatedBMI && bmiState && (
				<div className="mt-8">
					<div className="flex">
						<p className="mr-1">BMI:</p>
						<p className={BMIStateColor(bmiState)}>
							{calculatedBMI.toFixed(2)}
						</p>
					</div>
					<p className="mt-2">Kategorie: {BMIStateName(bmiState)}</p>
				</div>
			)}
		</div>
	);
};

export default BMIForm;
