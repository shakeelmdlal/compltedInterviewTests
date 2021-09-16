
function ResidentsList(props) {
  const nameList = props.name;
  const studentList = nameList.map((item, key) => {
  return  <li key={key}>{item.name}</li>
  })

  console.log('nameList', nameList)
  return (
    <div>
   		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{nameList.length > 0 ? studentList : null}
			</ul>
		</div>

    </div>
  )
}
export default ResidentsList;
