import { React, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import MainContext from '../../context/context'

const Card = () => {
    const { data, addToBasket } = useContext(MainContext);
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState(null);
    return (
        <div className='container'>
            <input type='text' placeholder='search_data' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={()=>setSortBy({ field: "title", asc: true })}>A-Z</button>
            <button onClick={()=>setSortBy({ field: "title", asc: false })}>Z-A</button>
            <button onClick={()=>setSortBy({ field: "price", asc: true })}>Azalan</button>
            <button onClick={()=>setSortBy({ field: "price", asc: false })}>Artan</button>
            <button onClick={()=>setSortBy(null)}>default</button>

            <div className="row">
                {data
                    .filter(x => x.title.toLowerCase().includes(search.toLocaleLowerCase()))
                    .sort((a, b) => {
                        if (!sortBy) {
                            return 0;
                        }
                        else if (sortBy.asc) {
                            return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
                        }
                        else if (sortBy.asc==false) {
                            return (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] <a[sortBy.field]) ? -1 : 0)
                        }

                    })
                    .map((item, index) => (
                        <div className="col-4 cards" key={index}>
                            <div className="card" style={{ "width": "23rem" }}>
                                <img src={item.image1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <div className='link'>
                                        <Link to={`/detail/${item._id}`} className="btn btn-warning">Go Details</Link>
                                        <button className='btn btn-warning' onClick={() => {
                                            addToBasket(item._id);
                                        }}
                                        >Add to basket</button>
                                    </div>
                                </div>
                                <div className='card-footer'>
                                    <img src={item.image2} alt="" />
                                    <div className='card_text'>
                                        <h5>{item.name}</h5>
                                        <p>{item.position}</p>
                                    </div>
                                    <div className='card_price'><span>{item.price}$</span></div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Card