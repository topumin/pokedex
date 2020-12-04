import React, { useState } from 'react'
import Modal from 'react-modal';
import "./index.css";
import emoji from "./imgs/cute.png"
import search from "./imgs/search.png"

export default function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
    setModalIsOpen(true)
  };

  const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
  };

  return (
      <div className="container" >
        <Modal isOpen={modalIsOpen} className="modal" onRequestClose={()=> setModalIsOpen(false)}>
        <form>

          <div className="wrap-input">
            <input type="text" name="search" placeholder="Find a Pokemon"/>
            <input type="image" style={{width: '45px'}} src={search}/>
          </div>

          <div className="modal-content">
            
            <div className="modal-list-item">
              <div className="add">
                ADD
              </div>
              <div className="card">
                <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon" />
              </div>
              <div className="card-detail">
                <h3>Deoxys ex</h3>
                <div className="type">
                  <label>HP</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>STR</label> 
                  <div className="bar">
                    <div className="result" style={{width: 175}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>WEAK</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="emoji">
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                </div>
              </div>
            </div>

            <div className="modal-list-item">
              <div className="add">
                ADD
              </div>
              <div className="card">
                <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon" />
              </div>
              <div className="card-detail">
                <h3>Deoxys ex</h3>
                <div className="type">
                  <label>HP</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>STR</label> 
                  <div className="bar">
                    <div className="result" style={{width: 175}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>WEAK</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="emoji">
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                </div>
              </div>
            </div>

            <div className="modal-list-item">
              <div className="add">
                ADD
              </div>
              <div className="card">
                <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon" />
              </div>
              <div className="card-detail">
                <h3>Deoxys ex</h3>
                <div className="type">
                  <label>HP</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>STR</label> 
                  <div className="bar">
                    <div className="result" style={{width: 175}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>WEAK</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="emoji">
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                </div>
              </div>
            </div>

            <div className="modal-list-item">
              <div className="add">
                ADD
              </div>
              <div className="card">
                <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon" />
              </div>
              <div className="card-detail">
                <h3>Deoxys ex</h3>
                <div className="type">
                  <label>HP</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>STR</label> 
                  <div className="bar">
                    <div className="result" style={{width: 175}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>WEAK</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="emoji">
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                </div>
              </div>
            </div>

            <div className="modal-list-item">
              <div className="add">
                ADD
              </div>
              <div className="card">
                <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon" />
              </div>
              <div className="card-detail">
                <h3>Deoxys ex</h3>
                <div className="type">
                  <label>HP</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>STR</label> 
                  <div className="bar">
                    <div className="result" style={{width: 175}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>WEAK</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="emoji">
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                </div>
              </div>
            </div>

            <div className="modal-list-item">
              <div className="add">
                ADD
              </div>
              <div className="card">
                <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon" />
              </div>
              <div className="card-detail">
                <h3>Deoxys ex</h3>
                <div className="type">
                  <label>HP</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>STR</label> 
                  <div className="bar">
                    <div className="result" style={{width: 175}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>WEAK</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="emoji">
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                </div>
              </div>
            </div>

            <div className="modal-list-item">
              <div className="add">
                ADD
              </div>
              <div className="card">
                <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon" />
              </div>
              <div className="card-detail">
                <h3>Deoxys ex</h3>
                <div className="type">
                  <label>HP</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>STR</label> 
                  <div className="bar">
                    <div className="result" style={{width: 175}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>WEAK</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="emoji">
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                </div>
              </div>
            </div>

            <div className="modal-list-item">
              <div className="add">
                ADD
              </div>
              <div className="card">
                <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon" />
              </div>
              <div className="card-detail">
                <h3>Deoxys ex</h3>
                <div className="type">
                  <label>HP</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>STR</label> 
                  <div className="bar">
                    <div className="result" style={{width: 175}}></div>
                  </div>
                </div>
                <div className="type">
                  <label>WEAK</label> 
                  <div className="bar">
                    <div className="result" style={{width: 350}}></div>
                  </div>
                </div>
                <div className="emoji">
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                  <img src={emoji} alt="happiness"/>
                </div>
              </div>
            </div>      

          </div>

        </form>
        </Modal>
        <navbar className="header">My Pokedex</navbar>
        <div className="content">
         
          <div className="list-item">
            <div className="cancel">
              X
            </div>
            <div className="card">
              <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon"/>
            </div>
            <div className="card-detail">
              <h3>Deoxys ex</h3>
              <div className="type">
                <label>HP</label> 
                <div className="bar">
                  <div className="result" style={{width: 160}}></div>
                </div>
              </div>
              <div className="type">
                <label>STR</label> 
                <div className="bar">
                  <div className="result" style={{width: 80}}></div>
                </div>
              </div>
              <div className="type">
                <label>WEAK</label> 
                <div className="bar">
                  <div className="result" style={{width: 160}}></div>
                </div>
              </div>
              <div className="emoji">
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
              </div>
            </div>
          </div>
          
          <div className="list-item">
            <div className="cancel">
              X
            </div>
            <div className="card">
              <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon"/>
            </div>
            <div className="card-detail">
              <h3>Deoxys ex</h3>
              <div className="type">
                <label>HP</label> 
                <div className="bar">
                  <div className="result" style={{width: 160}}></div>
                </div>
              </div>
              <div className="type">
                <label>STR</label> 
                <div className="bar">
                  <div className="result" style={{width: 80}}></div>
                </div>
              </div>
              <div className="type">
                <label>WEAK</label> 
                <div className="bar">
                  <div className="result" style={{width: 160}}></div>
                </div>
              </div>
              <div className="emoji">
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
              </div>
            </div>
          </div>

          <div className="list-item">
            <div className="cancel">
              X
            </div>
            <div className="card">
              <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon"/>
            </div>
            <div className="card-detail">
              <h3>Deoxys ex</h3>
              <div className="type">
                <label>HP</label> 
                <div className="bar">
                  <div className="result" style={{width: 160}}></div>
                </div>
              </div>
              <div className="type">
                <label>STR</label> 
                <div className="bar">
                  <div className="result" style={{width: 80}}></div>
                </div>
              </div>
              <div className="type">
                <label>WEAK</label> 
                <div className="bar">
                  <div className="result" style={{width: 160}}></div>
                </div>
              </div>
              <div className="emoji">
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
              </div>
            </div>
          </div>

          <div className="list-item">
            <div className="cancel">
              X
            </div>
            <div className="card">
              <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon"/>
            </div>
            <div className="card-detail">
              <h3>Deoxys ex</h3>
              <div className="type">
                <label>HP</label> 
                <div className="bar">
                  <div className="result" style={{width: 160}}></div>
                </div>
              </div>
              <div className="type">
                <label>STR</label> 
                <div className="bar">
                  <div className="result" style={{width: 80}}></div>
                </div>
              </div>
              <div className="type">
                <label>WEAK</label> 
                <div className="bar">
                  <div className="result" style={{width: 160}}></div>
                </div>
              </div>
              <div className="emoji">
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
              </div>
            </div>
          </div>

          <div className="list-item">
            <div className="cancel">
              X
            </div>
            <div className="card">
              <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon"/>
            </div>
            <div className="card-detail">
              <h3>Deoxys ex</h3>
              <div className="type">
                <label>HP</label> 
                <div className="bar">
                  <div className="result" style={{width: 160}}></div>
                </div>
              </div>
              <div className="type">
                <label>STR</label> 
                <div className="bar">
                  <div className="result" style={{width: 80}}></div>
                </div>
              </div>
              <div className="type">
                <label>WEAK</label> 
                <div className="bar">
                  <div className="result" style={{width: 160}}></div>
                </div>
              </div>
              <div className="emoji">
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
              </div>
            </div>
          </div>

                    <div className="list-item">
            <div className="cancel">
              X
            </div>
            <div className="card">
              <img src="https://images.pokemontcg.io/ex8/98.png" alt="pokemon"/>
            </div>
            <div className="card-detail">
              <h3>Deoxys ex</h3>
              <div className="type">
                <label>HP</label> 
                <div className="bar">
                  <div className="result" style={{width: 160}}></div>
                </div>
              </div>
              <div className="type">
                <label>STR</label> 
                <div className="bar">
                  <div className="result" style={{width: 80}}></div>
                </div>
              </div>
              <div className="type">
                <label>WEAK</label> 
                <div className="bar">
                  <div className="result" style={{width: 160}}></div>
                </div>
              </div>
              <div className="emoji">
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
                <img src={emoji} alt="happiness"/>
              </div>
            </div>
          </div>    
          
        </div>
        <navbar className="footer">
          <div className="add" onClick={setModalIsOpenToTrue}> + </div>
        </navbar>
    </div>
  )
}
