import React from 'react';
import LocationCard from './LocationCard';
import withSearch from './withSearch'

const preload = {
    "data": [
        {
            "name": "Ojo",
            "zone": "Lagos State",
            "region": "South West"
        },
        {
            "name": "Ahiazu Mbaise",
            "zone": "Imo State",
            "region": "South East"
        },
        {
            "name": "Akoko-Edo",
            "zone": "Edo State",
            "region": "South South"
        },
        {
            "name": "Anka",
            "zone": "Zamfara State",
            "region": "North West"
        },
        {
            "name": "Akwanga",
            "zone": "Nasarawa State",
            "region": "North Central"
        }
    ]
}


const Location = ({ searchTerm }) => {
    return (
        <div>
            <div>
                <div>
                    <h2>Preferred Locations</h2>
                </div>
            </div>
            <div>
                {preload.data
                    .filter(location => `${location.name} ${location.zone} ${location.region}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
                    .map(location => <LocationCard key={location.id} {...location} />)}
            </div>
        </div>
    )
}

export default withSearch(Location)
