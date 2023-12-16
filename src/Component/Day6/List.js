export default function List()
{
    
    const animal=["dog","cat","lion","tiger"]
    const ans=animal.map((ani)=><li>{ani}</li>)
    
    
    return(
        <div>
            <ul type="none">
            {ans}

            </ul>
        </div>
    )
}
