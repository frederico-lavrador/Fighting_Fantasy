import './App.css'

function App() {

  return (
		<>
			<div className='container'>
				<div className='app__wrapper'>
					<div className='header'>
						<div className='title'>
							<h1>Fighting Fantasy Adventure Manager</h1>
						</div>
					</div>
					<div className='app__content'>
						<div className='stats__table'>
							<h2>Stats</h2>
							<div className='stats__stats'>
								<div className='stats__name'>
									<h4>Name</h4>
									<p>Skill</p>
									<p>Stamina</p>
									<p>Luck</p>
								</div>
								<div className='stats__initial'>
									<h4>Initial</h4>
									<p>0</p>
									<p>0</p>
									<p>0</p>
								</div>
								<div className='stats__current'>
									<h4>Current</h4>
									<p>0</p>
									<p>0</p>
									<p>0</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App
