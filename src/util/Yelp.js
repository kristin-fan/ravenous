const apiKey = '0qo3uU-EIKTTwYEKGc35aPUX5I1h7osjo-q8b9v1n3VSHd65Oq2ppZubEnxmFo7UazPl3A857Mb-2uX296Wots1YB5d1tyj5BnZ421Mw1EeQ0lEVYQrN4940ZyBtXHYx';

const Yelp = {
    search(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                
                }));
            }
        });
    }
};

export default Yelp;