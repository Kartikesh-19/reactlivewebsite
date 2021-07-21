import React,{useState} from 'react'

const Contact = () => {
 const [data,setData]=useState({
   fullname:'',
   phone:'',
   email:'',
   message:''
 })
  const InputEvent=(e)=>{
    const {name,value}=e.target;
    setData({...data,[name]:value})

    // setData(preval=>{
    //  return{
    //   ...preval,
    //   [name]:value,
    //  }
    // })
    console.log(data);

  }
  const formSubmit=(event)=>{
    event.preventDefault();
    alert(`my name ${data.fullname} my phone no. ${data.phone} my email ${data.email} my msg ${data.message}`)
    setData({fullname:'',phone:'',email:'',message:''})
  };
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Fullname</label>
                <input type="email" className="form-control"  name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter your first name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" className="form-control"  name='phone' value={data.phone} onChange={InputEvent} placeholder="Mobile number" min='1' max='10' />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address </label>
                <input type="email" className="form-control"   name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control"  name='message' value={data.message}  onChange={InputEvent} rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact
