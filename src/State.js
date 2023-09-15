export default function State({count,pacCount}){
    let percentage= Math.round((pacCount/count)*100)
    return(
      <footer className="stats">
        {(count==0)?<p>Start adding som items to your packing list 🚀</p>:
        <em>
        {percentage==100?"You have every thing to go ✈": 
        `💼 You have ${count} items on your list, 
        and you already packed ${pacCount}
         ${percentage}%`
      }
        </em>
        }
        
        </footer>
    )
  }