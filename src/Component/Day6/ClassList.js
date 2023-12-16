export default function ClassList()
{
    const college=[{id:1,stuName:"sachin",age:26},{id:2,stuName:"ahamed",age:27},{id:3,stuName:"saliha",age:60}]

   const ans=college.map((col)=><li key={col.id}> {col.id} {col.stuName} {col.age}</li>)
    
    return(
        <div style={{backgroundColor:'blue'}}>
          <ul>
            {ans}
          </ul>
        </div>
    )
}