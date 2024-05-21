import React from 'react'
import "./Section1.css"
const Section1 = () => {
    return (
        <div className='container main'>
            <div className='row'>
                <div className="col-6 text_course">
                    <h3>Register now and get a discount <br /> 50% discount until 1 January</h3>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                    <button className='Register'> REGISTER NOW</button>
                </div>
                <div className="col-6 form_main">
                    <div className='form_text'>
                        <h2>Search for your course</h2>
                        <form action="">
                            <label for="name"></label>
                            <input type="text" className='inputt' id="name" placeholder="Course Name" />
                            <label for="category"></label>
                            <input type="text" className='inputt' id="category" placeholder="Categoory" />
                            <label for="degree"></label>
                            <input type="text" className='inputt' id="degree" placeholder="Degree" />
                            <button type="submit" class="btn btn-warning">Search Course</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1