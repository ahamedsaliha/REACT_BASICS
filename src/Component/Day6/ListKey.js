export default function ListKey()
{
    
   const birds=["parrot","peacock","sparrow","kiwi"]
   const ans=birds.map((bir,index)=><li key={index}>{index}=>{bir}</li>)

   return(
    <div>
        <ul type="none">
            {ans}
        </ul>
    </div>
   )
}