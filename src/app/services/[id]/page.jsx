import React from 'react';

const ServiceDetailsPage = ({ params }) => {

    const Id = params.id;
    console.log(params.id)
    const data = [
        {
            "id": 1,
            "servicesName": "Web Development",
            "servicesDetails": "Building responsive and dynamic websites using modern technologies like HTML, CSS, JavaScript, and React."
        },
        {
            "id": 2,
            "servicesName": "Mobile App Development",
            "servicesDetails": "Creating Android and iOS applications using Flutter and React Native."
        },
        {
            "id": 3,
            "servicesName": "UI/UX Design",
            "servicesDetails": "Designing intuitive and user-friendly interfaces for web and mobile applications."
        },
        {
            "id": 4,
            "servicesName": "Digital Marketing",
            "servicesDetails": "Promoting brands through SEO, social media, and paid advertising to increase online presence."
        }
    ]

    const singleData = data.find((d) => d.id == Id)

    console.log(singleData)

    return (
        <div>
            hello
            id:{Id}
            <h1>{singleData.servicesName}</h1>
            <p>{singleData.servicesDetails}</p>
        </div>
    );
};

export default ServiceDetailsPage;