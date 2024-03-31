import React,{useState} from 'react'


function Formpage() {

    const [name,setname]=useState("");

    const changename = (element)=>{
        console.log(element);
        setname(element.target.value);
    }






  return (
    <div className='container bg-info shadow' style={{marginTop:'80px'}}>
        
        <div className='row p-3'>
            <div className='col-12'>
                <h1 className='text-center pb-3'>Registor Page</h1>
            </div>
            <div className='col-sm-4'>
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" onInput={changename}/>
                </div>
            </div>
            <div className='col-sm-4'>
            <div class="mb-3">
                <label class="form-label">City</label>
                <input type="text" class="form-control"/>
                </div>
            </div>
            <div className='col-sm-4'>
            <div class="mb-3">
                <label class="form-label">Email id</label>
                <input type="text" class="form-control"/>
                </div>
            </div>
            <div className='col-sm-4'>
            <div class="mb-3">
                <label class="form-label">Example label</label>
                <input type="text" class="form-control"/>
                </div>
            </div>
            <div className='col-sm-4'>
            <div class="mb-3">
                <label class="form-label">Example label</label>
                <input type="text" class="form-control"/>
                </div>
            </div>
            <div className='col-sm-4'>
            <div class="mb-3">
                <label class="form-label">Example label</label>
                <input type="text" class="form-control"/>
                </div>
            </div>
            <div className='col-sm-4'>
            <div class="mb-3">
                <label class="form-label">Example label</label>
                <input type="text" class="form-control"/>
                </div>
            </div>
            <div className='col-sm-4'>
            <div class="mb-3">
                <label class="form-label">Example label</label>
                <input type="text" class="form-control"/>
                </div>
            </div>
            <div className='col-sm-4'>
            <div class="mb-3">
                <label class="form-label">Example label</label>
                <input type="text" class="form-control"/>
                </div>
            </div>
            <div className='col-sm-4'>
            <div class="mb-3">
                <label class="form-label">Example label</label>
                <input type="text" class="form-control"/>
                </div>
            </div>
            <div className='col-sm-4'>
            <div class="mb-3">
                <label class="form-label">Example label</label>
                <input type="text" class="form-control"/>
                </div>
            </div>
            <div className='col-sm-4'>
            <div class="mb-3">
                <label class="form-label">Example label</label>
                <input type="text" class="form-control"/>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-12'>
            <div className="p-5 bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">Basic jumbotron</h1>
                <p className="lead">
                
                <h6>Your Name: {name}</h6>
                <h6>city</h6>
                <h6>email</h6>
[Your Address]
[City, State, ZIP Code]
[Your Email Address]
[Your Phone Number]
[Date]

[Employer's Name]
[Company Name]
[Company Address]
[City, State, ZIP Code]

Dear [Employer's Name],

I am writing to confirm my acceptance of the job offer for the position of [Position Title] at [Company Name], as outlined in your offer letter dated [Date of Offer Letter]. I am thrilled to join your team and contribute to the continued success and growth of the company.

I would like to express my gratitude for this opportunity and for the confidence you have placed in me. I am eager to bring my skills, experience, and enthusiasm to the role and collaborate with the talented individuals at [Company Name].

As we discussed, my start date will be on [Start Date], and I will report to [Supervisor's Name or Department]. Please let me know if there are any further steps I need to take before my start date, such as completing paperwork or undergoing any additional screenings.

I am excited to embark on this new chapter of my career with [Company Name] and look forward to making meaningful contributions to the team. Thank you once again for this opportunity, and please do not hesitate to reach out if you need any further information from me.

Sincerely,

[Your Name]

                </p>
            </div>
            </div>
        </div>





    </div>
  )
}

export default Formpage