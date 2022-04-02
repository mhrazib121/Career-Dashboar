import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './CareerDashboard.css'

const CareerDashboard = () => {
    const [employmentTypes, setEmploymentTypes] = useState([]);
    const [type, setType] = useState("");
    const [jobSections, setJobSections] = useState([]);
    const [jobText, setJobText] = useState("");
    const [workplaces, setWorkplaces] = useState([]);
    const [workplaceText, setWorkplaceText] = useState("");
    const { register, handleSubmit, reset } = useForm();

    // For selecting Employment Type 
    const allEmplomentType = ["Full-time", "Part-time", "Contract", "Temporary", "Volunteer", "Internship"];
    const onEmplomentTypeSelect = () => {
        setEmploymentTypes(allEmplomentType);
    }
    const employmentTypeSelectHandeler = (e) => {
        setType(e);
        setEmploymentTypes([]);
    }
    // For selecting Job Section 
    const jobSection = ["Business Systems", "Design", "Engineering", "Finance", "Human Resources", "Legal", "Marketing", "Operations", "Product", "Sales", "Security", "Support"];

    const onJobSectionHandler = () => {
        setJobSections(jobSection);
    }
    const jobSectionSelectHandeler = (e) => {
        setJobText(e);
        setJobSections([]);
    }
    // For selecting Workplace type 
    const workplace = ["On-site", "Hybrid", "Remote"];
    const onWorkplaceHandler = () => {
        setWorkplaces(workplace);
    }
    const workplaceSelectHandeler = (e) => {
        setWorkplaceText(e);
        setWorkplaces([]);
    }
    const onSubmit = data =>{
        axios.post('https://afternoon-journey-90579.herokuapp.com/jobposts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Job post successfully');
                    reset();
                }
            })
    }
    return (
        <div className='container'>
            <h1 className='text-center mt-5 mb-3'>Career Dashboard</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full'>
                    <div className='d-lg-flex justify-content-between'>
                        {/* Tittle */}
                        <div>
                            <input className='tittle-field' type="text" placeholder='Tittle' {...register("tittle", { required: true })} />
                        </div>
                        {/* Employment type */}
                        <div>
                            <input className='input-field employment-type' type="text" value={type} placeholder='Employment Type' onFocus={() => onEmplomentTypeSelect()} onBlur={()=>{
                                setTimeout(()=>{
                                    setEmploymentTypes([]); 
                                }, 100)
                            }} {...register("employmentType", { required: true })} />
                            <div className='dropdown-body'>
                                {
                                    employmentTypes.map((employmentType, i) =>
                                        <div key={i} className="px-2 py-1 border border-2 dropdown-field" onClick={() => employmentTypeSelectHandeler(employmentType)}>{employmentType}</div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className='d-lg-flex justify-content-between'>
                        {/* Location  */}
                        <div>
                            <input type="text" placeholder='Location' className='input-field2' />
                        </div>
                        {/* Job Section */}
                        <div>
                            <input type="text" value={jobText} placeholder='Job Section (Option Choose)' className='input-field2 job-section' onFocus={() => onJobSectionHandler()} onBlur={()=>{
                                setTimeout(()=>{
                                    setJobSections([]);
                                }, 100)
                            }} {...register("jobSection", { required: true })}/>
                            <div className='dropdown-body'>
                                {
                                    jobSections.map((jobSection, i) =>
                                        <div key={i} className="px-2 py-1 border border-2 dropdown-field" onClick={() => jobSectionSelectHandeler(jobSection)}>{jobSection}</div>
                                    )
                                }
                            </div>
                        </div>
                        {/* Workplace */}
                        <div>
                            <input type="text" value={workplaceText} placeholder='Workplace Type (Option Choose)' className='input-field2' onFocus={() => onWorkplaceHandler()} onBlur={()=>{
                                setTimeout(()=>{
                                    setWorkplaces([]);
                                }, 100)
                            }} {...register("workplaceType", { required: true })}/>
                            <div className='dropdown-body'>
                                {
                                    workplaces.map((workplace, i) =>
                                        <div key={i} className="px-2 py-1 border border-2 dropdown-field" onClick={() => workplaceSelectHandeler(workplace)}>{workplace}</div>
                                    )
                                }
                            </div>
                        </div>
                        {/* Payment */}
                        <div>
                            <input type="text" placeholder='Paid / Gratis (Option Choose)' className='input-field2' {...register("paymentType", { required: true })}/>
                        </div>
                    </div>
                    {/* Short Description  */}
                    <div>
                        <input type="text" placeholder='Short Discription ( 150 Words )' className='description-field' {...register("shortDescription", { required: true })}/>
                    </div>
                </div>
                {/* Description section  */}
                <div className='my-5 px-3 py-4 bg-light rounded'>
                    <h3>Add a job description </h3>
                    <h6>Description *</h6>
                    <textarea name="" id="" cols="145" rows="7" {...register("description", { required: true })}></textarea>
                    <h3 className='mt-2'>Add Skill</h3>
                    <p>Add skill keyword to make your job more visible to the right candidates (select up to 10)</p>
                    <h5 className='add-skill-btn '>Add skill +</h5>
                </div>
                <input className='btn btn-color mb-5 px-3 fs-4 rounded text-dark fw-bold d-flex ms-auto' type="submit"/>
            </form>
        </div>
    );
};

export default CareerDashboard;