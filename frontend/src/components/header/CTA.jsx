import cv from '/assets/Resume.pdf'

function CTA(){
    console.log(cv);
    return(
        <div className="cta">
            
            <a href={cv} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA