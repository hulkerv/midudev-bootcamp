import React, { useState } from 'react';

const Title = () => <h1>give feedbak</h1>;

const Buttons = ({good, neutral, bad}) =>{
	return(
		<div>
			<button onClick={good}>good</button>
      		<button onClick={neutral}>neutral</button>
      		<button onClick={bad}>bad</button>
		</div>
	)
}

const WarningNotFeedback = () => <h2>Not feedback given</h2>;

const StatisticsTitle = () => <h1>Statistics</h1>;

const Statistics = ({text, clicksValue}) =>{
	return (
			<tr>
				<td>{text}</td>
				<td>{clicksValue}</td>
			</tr>
	)
}

const App = () => {

  	const [good, setGood] = useState(0)
  	const [neutral, setNeutral] = useState(0)
  	const [bad, setBad] = useState(0)

  	const handleClickGood = () => setGood((devGood )=>devGood + 1);
  	const handleClickNeutral = () => setNeutral((devNeutral )=>devNeutral + 1);
  	const handleClickBad = () => setBad((devBad )=>devBad + 1);
	
	const all = good + neutral + bad;
	const averageCalculate = ((good) + (bad * -1))/all;
	const average = isNaN(averageCalculate) ? "" : averageCalculate.toFixed(2);
	const positivePercentCalculate = (good * 100)/all;
	const positivePercent = isNaN(positivePercentCalculate) ? "" : positivePercentCalculate.toFixed(2);
  
  	return (
    	<div>
    		<Title/>
    	
    		<Buttons good={handleClickGood}
    			 	neutral={handleClickNeutral}
    			 	bad={handleClickBad}/>
    		
    		{all === 0 ? 
						(<WarningNotFeedback/>): 
						(
							<div>
								<StatisticsTitle/>
								<table>
									<tbody>
										<Statistics text="good" clicksValue={good}/>
										<Statistics text="neutral" clicksValue={neutral}/>
										<Statistics text="bad" clicksValue={bad}/>
										<Statistics text="all" clicksValue={all}/>
										<Statistics text="average" clicksValue={average}/>
										<Statistics text="positive" clicksValue={positivePercent + "%"}/>
									</tbody>
								</table>	
							</div>
							
						)
			}
    </div>
  )
}

export default App