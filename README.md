# Creative Soldier Coding Challenge

One Paragraph of project description goes here

## Getting Started

Backend:

Please create a simple PHP script that fetches apartment availability data from http://rentcafe.com/rentcafeapi.aspx?requestType=apartmentavailability&APIToken=NDY5OTI%3d-XDY6KCjhwhg%3d&propertyCode=p0155985

The script should store this data in some sort of cache on your server and then deliver stored content when called. The data served must be not older than 10 mins, so you should clean the cache if it gets outdated. In case there’s an error connecting to the source server, the script should still serve cached data.

Frontend:

Please create the HTML, CSS and JS code that makes an AJAX call to your PHP script (a kind of API basically) and then displays the JSON received in a nice table with the following columns:

Apartment Name, # Bedrooms, # Bathrooms, Floorplan Name, Rent (show formatted currency as min-max range), Apply Online (link)

### To start

To run on Mac start a server in your CLI with the following code:

```
php -S localhost:4000 
```

## Explained

index.html runs the index.js script which makes an AJAX call to curl_request.php.  curl_request.php first checks to see if a cache of data exists and is at most 10 minutes old and if not queries an API saving the contents to a .txt file for serving

## Live Example

A live example of this can be found on my personal site at http://www.markaabel.com/creativesoldier

## Authors

* **Mark Abel** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
