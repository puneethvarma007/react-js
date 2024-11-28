import { useRef,useState } from "react"

function Ref2(){
    let ele = useRef(null)
    let x = useRef(10);
    const [y, setY] = useState(0)
    let z = 1000;
    return(<>
                <div className="ref2Container">
                <h1 ref={ele} className="active">this is a heading</h1>
                <button onClick={()=>{
                    // ele.current.innerHTML = "hello"
                    console.dir(ele)
                    console.log(ele)
                    ele.current.classList.toggle('active')
                    ele.current.classList.toggle("inactive")

                }}>click for toogle</button>

                <h1>ref value x : {x.current}</h1>
                <br />
                <h1>z value : {z}</h1>
                <button onClick={()=>{
                    x.current = x.current+10; // in console it will print but it doesn't render in the ui.
                    console.dir(x.current)

                    z = z+1000; // the z value doesn't re renders beacuse it is not changing the state.
                    
                    setY((y)=> y+100) // now the ref will render because state is rendering with that ref also re-renders in the ui.
                    console.log('y is' , y);
                    
                }}>click for x change</button>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, optio repudiandae laboriosam fuga vero architecto neque! Quas modi asperiores minus quisquam rem, minima possimus dolor doloribus rerum beatae fugiat consequatur iusto quis laboriosam, molestiae nulla neque! Consequuntur itaque laborum, quae pariatur repellendus perferendis! Eligendi consequatur tempore similique dolore enim? Magnam minus dignissimos nobis quis exercitationem dolore placeat? Voluptas saepe magnam ea laborum. Obcaecati porro quaerat voluptate delectus minus, esse, consequuntur minima voluptatibus adipisci pariatur asperiores, necessitatibus fugit doloribus numquam ipsam. Incidunt ipsa ducimus repudiandae dignissimos iste voluptatum natus culpa. Magnam harum modi molestiae voluptate aspernatur non vel autem sunt ducimus.</p>
                </div>
                
           </>)

}

export default Ref2