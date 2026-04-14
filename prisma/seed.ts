import { PrismaClient } from '../src/generated/prisma/client';
import * as dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

interface EventSeed {
  source: string;
  name: string;
  url: string;
  categories: string[];
  venueName: string[];
  lat: number;
  lng: number;
  venuePostalCode: string;
  venueCountry: string;
  venueStateName: string;
  venueStateCode: string;
  venueCityName: string;
  venueAddressLine1: string;
  venueAddressLine2: string;
  startDate?: string;
}

const events: EventSeed[] = [
  // New York
  { source: 'Ticketmaster', name: 'Taylor Swift: Eras Tour', url: '/e/1001', categories: ['Music', 'Pop'], venueName: ['MetLife Stadium'], lat: 40.8135, lng: -74.0745, venuePostalCode: '07073', venueCountry: 'US', venueStateName: 'New Jersey', venueStateCode: 'NJ', venueCityName: 'East Rutherford', venueAddressLine1: '1 MetLife Stadium Dr', venueAddressLine2: '' },
  { source: 'Ticketmaster', name: 'Hamilton on Broadway', url: '/e/1002', categories: ['Theater', 'Musical'], venueName: ['Richard Rodgers Theatre'], lat: 40.7590, lng: -73.9875, venuePostalCode: '10036', venueCountry: 'US', venueStateName: 'New York', venueStateCode: 'NY', venueCityName: 'New York', venueAddressLine1: '226 W 46th St', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'NYC Food & Wine Festival', url: '/e/1003', categories: ['Food', 'Festival'], venueName: ['Pier 92'], lat: 40.7680, lng: -74.0020, venuePostalCode: '10036', venueCountry: 'US', venueStateName: 'New York', venueStateCode: 'NY', venueCityName: 'New York', venueAddressLine1: '711 12th Ave', venueAddressLine2: 'Pier 92' },
  { source: 'StubHub', name: 'NY Knicks vs Lakers', url: '/e/1004', categories: ['Sports', 'Basketball'], venueName: ['Madison Square Garden'], lat: 40.7505, lng: -73.9934, venuePostalCode: '10001', venueCountry: 'US', venueStateName: 'New York', venueStateCode: 'NY', venueCityName: 'New York', venueAddressLine1: '4 Pennsylvania Plaza', venueAddressLine2: '' },
  { source: 'LiveNation', name: 'Dave Chappelle Live', url: '/e/1005', categories: ['Comedy', 'Stand-Up'], venueName: ['Radio City Music Hall'], lat: 40.7600, lng: -73.9800, venuePostalCode: '10020', venueCountry: 'US', venueStateName: 'New York', venueStateCode: 'NY', venueCityName: 'New York', venueAddressLine1: '1260 6th Ave', venueAddressLine2: '' },
  // Los Angeles
  { source: 'Ticketmaster', name: 'Beyonce World Tour', url: '/e/1006', categories: ['Music', 'R&B'], venueName: ['SoFi Stadium'], lat: 33.9535, lng: -118.3392, venuePostalCode: '90301', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'Inglewood', venueAddressLine1: '1000 S Prairie Ave', venueAddressLine2: '' },
  { source: 'StubHub', name: 'LA Lakers vs Celtics', url: '/e/1007', categories: ['Sports', 'Basketball'], venueName: ['Crypto.com Arena'], lat: 34.0430, lng: -118.2673, venuePostalCode: '90015', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'Los Angeles', venueAddressLine1: '1111 S Figueroa St', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'LA Art Walk 2026', url: '/e/1008', categories: ['Art', 'Culture'], venueName: ['The Broad Museum'], lat: 34.0544, lng: -118.2503, venuePostalCode: '90012', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'Los Angeles', venueAddressLine1: '221 S Grand Ave', venueAddressLine2: '' },
  { source: 'AXS', name: 'Coachella 2026 Week 1', url: '/e/1009', categories: ['Music', 'Festival'], venueName: ['Empire Polo Club'], lat: 33.6824, lng: -116.2380, venuePostalCode: '92210', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'Indio', venueAddressLine1: '81800 Ave 51', venueAddressLine2: '' },
  { source: 'LiveNation', name: 'Hollywood Bowl Jazz Night', url: '/e/1010', categories: ['Music', 'Jazz'], venueName: ['Hollywood Bowl'], lat: 34.1122, lng: -118.3396, venuePostalCode: '90028', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'Los Angeles', venueAddressLine1: '2301 N Highland Ave', venueAddressLine2: '' },
  // Chicago
  { source: 'Ticketmaster', name: 'Lollapalooza 2026', url: '/e/1011', categories: ['Music', 'Festival'], venueName: ['Grant Park'], lat: 41.8719, lng: -87.6200, venuePostalCode: '60601', venueCountry: 'US', venueStateName: 'Illinois', venueStateCode: 'IL', venueCityName: 'Chicago', venueAddressLine1: '337 E Randolph St', venueAddressLine2: '' },
  { source: 'StubHub', name: 'Chicago Cubs vs Cardinals', url: '/e/1012', categories: ['Sports', 'Baseball'], venueName: ['Wrigley Field'], lat: 41.9484, lng: -87.6553, venuePostalCode: '60613', venueCountry: 'US', venueStateName: 'Illinois', venueStateCode: 'IL', venueCityName: 'Chicago', venueAddressLine1: '1060 W Addison St', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Chicago Blues Festival', url: '/e/1013', categories: ['Music', 'Blues'], venueName: ['Millennium Park'], lat: 41.8827, lng: -87.6233, venuePostalCode: '60601', venueCountry: 'US', venueStateName: 'Illinois', venueStateCode: 'IL', venueCityName: 'Chicago', venueAddressLine1: '201 E Randolph St', venueAddressLine2: '' },
  { source: 'AXS', name: 'Second City Comedy Show', url: '/e/1014', categories: ['Comedy', 'Improv'], venueName: ['The Second City'], lat: 41.9127, lng: -87.6341, venuePostalCode: '60614', venueCountry: 'US', venueStateName: 'Illinois', venueStateCode: 'IL', venueCityName: 'Chicago', venueAddressLine1: '1616 N Wells St', venueAddressLine2: '' },
  { source: 'LiveNation', name: 'Chicago Symphony: Beethoven', url: '/e/1015', categories: ['Music', 'Classical'], venueName: ['Symphony Center'], lat: 41.8794, lng: -87.6245, venuePostalCode: '60604', venueCountry: 'US', venueStateName: 'Illinois', venueStateCode: 'IL', venueCityName: 'Chicago', venueAddressLine1: '220 S Michigan Ave', venueAddressLine2: '' },
  // Houston
  { source: 'Ticketmaster', name: 'Houston Rodeo 2026', url: '/e/1016', categories: ['Rodeo', 'Festival'], venueName: ['NRG Stadium'], lat: 29.6847, lng: -95.4107, venuePostalCode: '77054', venueCountry: 'US', venueStateName: 'Texas', venueStateCode: 'TX', venueCityName: 'Houston', venueAddressLine1: '1 NRG Pkwy', venueAddressLine2: '' },
  { source: 'StubHub', name: 'Houston Rockets vs Heat', url: '/e/1017', categories: ['Sports', 'Basketball'], venueName: ['Toyota Center'], lat: 29.7508, lng: -95.3621, venuePostalCode: '77002', venueCountry: 'US', venueStateName: 'Texas', venueStateCode: 'TX', venueCityName: 'Houston', venueAddressLine1: '1510 Polk St', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Houston Taco Fest 2026', url: '/e/1018', categories: ['Food', 'Festival'], venueName: ['Minute Maid Park'], lat: 29.7573, lng: -95.3555, venuePostalCode: '77002', venueCountry: 'US', venueStateName: 'Texas', venueStateCode: 'TX', venueCityName: 'Houston', venueAddressLine1: '501 Crawford St', venueAddressLine2: '' },
  // Phoenix
  { source: 'Ticketmaster', name: 'Phoenix Open Golf Gala', url: '/e/1019', categories: ['Sports', 'Golf'], venueName: ['TPC Scottsdale'], lat: 33.6577, lng: -111.8956, venuePostalCode: '85254', venueCountry: 'US', venueStateName: 'Arizona', venueStateCode: 'AZ', venueCityName: 'Scottsdale', venueAddressLine1: '17020 N Hayden Rd', venueAddressLine2: '' },
  { source: 'AXS', name: 'Arizona Rock Fest 2026', url: '/e/1020', categories: ['Music', 'Rock'], venueName: ['Ak-Chin Pavilion'], lat: 33.4529, lng: -112.0718, venuePostalCode: '85004', venueCountry: 'US', venueStateName: 'Arizona', venueStateCode: 'AZ', venueCityName: 'Phoenix', venueAddressLine1: '2121 N 83rd Ave', venueAddressLine2: '' },
  // Philadelphia
  { source: 'Ticketmaster', name: 'Eagles Tailgate Festival', url: '/e/1021', categories: ['Sports', 'Football'], venueName: ['Lincoln Financial Field'], lat: 39.9007, lng: -75.1675, venuePostalCode: '19148', venueCountry: 'US', venueStateName: 'Pennsylvania', venueStateCode: 'PA', venueCityName: 'Philadelphia', venueAddressLine1: '1 Lincoln Financial Fld Wy', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Philly Jazz & Blues Fest', url: '/e/1022', categories: ['Music', 'Jazz'], venueName: ["Penn's Landing"], lat: 39.9444, lng: -75.1414, venuePostalCode: '19106', venueCountry: 'US', venueStateName: 'Pennsylvania', venueStateCode: 'PA', venueCityName: 'Philadelphia', venueAddressLine1: '101 S Columbus Blvd', venueAddressLine2: '' },
  // San Antonio
  { source: 'AXS', name: 'Spurs vs Warriors Playoff', url: '/e/1023', categories: ['Sports', 'Basketball'], venueName: ['Frost Bank Center'], lat: 29.4269, lng: -98.4375, venuePostalCode: '78205', venueCountry: 'US', venueStateName: 'Texas', venueStateCode: 'TX', venueCityName: 'San Antonio', venueAddressLine1: '1 AT&T Center Pkwy', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'San Antonio Fiesta 2026', url: '/e/1024', categories: ['Culture', 'Festival'], venueName: ['Hemisfair Park'], lat: 29.4167, lng: -98.4833, venuePostalCode: '78205', venueCountry: 'US', venueStateName: 'Texas', venueStateCode: 'TX', venueCityName: 'San Antonio', venueAddressLine1: '434 S Alamo St', venueAddressLine2: '' },
  // San Diego
  { source: 'Ticketmaster', name: 'Comic-Con Side Event', url: '/e/1025', categories: ['Entertainment', 'Pop Culture'], venueName: ['San Diego Conv Center'], lat: 32.7068, lng: -117.1631, venuePostalCode: '92101', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'San Diego', venueAddressLine1: '111 W Harbor Dr', venueAddressLine2: '' },
  { source: 'StubHub', name: 'Padres vs Dodgers', url: '/e/1026', categories: ['Sports', 'Baseball'], venueName: ['Petco Park'], lat: 32.7076, lng: -117.1568, venuePostalCode: '92101', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'San Diego', venueAddressLine1: '100 Park Blvd', venueAddressLine2: '' },
  // Dallas
  { source: 'LiveNation', name: 'Dallas Stars Playoff Game', url: '/e/1027', categories: ['Sports', 'Hockey'], venueName: ['American Airlines Center'], lat: 32.7905, lng: -96.8103, venuePostalCode: '75207', venueCountry: 'US', venueStateName: 'Texas', venueStateCode: 'TX', venueCityName: 'Dallas', venueAddressLine1: '2500 Victory Ave', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Dallas BBQ Championship', url: '/e/1028', categories: ['Food', 'Competition'], venueName: ['Fair Park'], lat: 32.7775, lng: -96.7475, venuePostalCode: '75210', venueCountry: 'US', venueStateName: 'Texas', venueStateCode: 'TX', venueCityName: 'Dallas', venueAddressLine1: '3921 MLK Jr Blvd', venueAddressLine2: '' },
  // San Jose
  { source: 'AXS', name: 'Tech Innovation Summit', url: '/e/1029', categories: ['Technology', 'Conference'], venueName: ['San Jose McEnery Conv Ctr'], lat: 37.3302, lng: -121.8907, venuePostalCode: '95113', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'San Jose', venueAddressLine1: '150 W San Carlos St', venueAddressLine2: '' },
  { source: 'Ticketmaster', name: 'San Jose Sharks vs Oilers', url: '/e/1030', categories: ['Sports', 'Hockey'], venueName: ['SAP Center'], lat: 37.3327, lng: -121.9010, venuePostalCode: '95113', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'San Jose', venueAddressLine1: '525 W Santa Clara St', venueAddressLine2: '' },
  // Austin
  { source: 'Eventbrite', name: 'SXSW Music Showcase', url: '/e/1031', categories: ['Music', 'Festival'], venueName: ['Austin Convention Center'], lat: 30.2639, lng: -97.7395, venuePostalCode: '78701', venueCountry: 'US', venueStateName: 'Texas', venueStateCode: 'TX', venueCityName: 'Austin', venueAddressLine1: '500 E Cesar Chavez St', venueAddressLine2: '' },
  { source: 'LiveNation', name: 'Austin City Limits 2026', url: '/e/1032', categories: ['Music', 'Festival'], venueName: ['Zilker Park'], lat: 30.2669, lng: -97.7698, venuePostalCode: '78746', venueCountry: 'US', venueStateName: 'Texas', venueStateCode: 'TX', venueCityName: 'Austin', venueAddressLine1: '2207 Lou Neff Rd', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Austin Tech Summit 2026', url: '/e/1033', categories: ['Technology', 'Conference'], venueName: ['Austin Conv Center'], lat: 30.2639, lng: -97.7395, venuePostalCode: '78701', venueCountry: 'US', venueStateName: 'Texas', venueStateCode: 'TX', venueCityName: 'Austin', venueAddressLine1: '500 E Cesar Chavez St', venueAddressLine2: 'Hall D' },
  // Jacksonville
  { source: 'StubHub', name: 'Jaguars vs Titans', url: '/e/1034', categories: ['Sports', 'Football'], venueName: ['EverBank Stadium'], lat: 30.3239, lng: -81.6378, venuePostalCode: '32202', venueCountry: 'US', venueStateName: 'Florida', venueStateCode: 'FL', venueCityName: 'Jacksonville', venueAddressLine1: '1 EverBank Stadium Dr', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Jacksonville Jazz Festival', url: '/e/1035', categories: ['Music', 'Jazz'], venueName: ['Metropolitan Park'], lat: 30.3268, lng: -81.6486, venuePostalCode: '32202', venueCountry: 'US', venueStateName: 'Florida', venueStateCode: 'FL', venueCityName: 'Jacksonville', venueAddressLine1: '1410 Gator Bowl Blvd', venueAddressLine2: '' },
  // San Francisco
  { source: 'Ticketmaster', name: 'Golden State Warriors Game', url: '/e/1036', categories: ['Sports', 'Basketball'], venueName: ['Chase Center'], lat: 37.7679, lng: -122.3874, venuePostalCode: '94158', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'San Francisco', venueAddressLine1: '1 Warriors Way', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'SF Outside Lands Festival', url: '/e/1037', categories: ['Music', 'Festival'], venueName: ['Golden Gate Park'], lat: 37.7694, lng: -122.4862, venuePostalCode: '94117', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'San Francisco', venueAddressLine1: '501 Stanyan St', venueAddressLine2: '' },
  { source: 'AXS', name: 'Hardly Strictly Bluegrass', url: '/e/1038', categories: ['Music', 'Bluegrass'], venueName: ['Golden Gate Park'], lat: 37.7694, lng: -122.4862, venuePostalCode: '94117', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'San Francisco', venueAddressLine1: '501 Stanyan St', venueAddressLine2: 'Speedway Meadow' },
  // Columbus
  { source: 'Ticketmaster', name: 'Ohio State vs Michigan', url: '/e/1039', categories: ['Sports', 'Football'], venueName: ['Ohio Stadium'], lat: 40.0017, lng: -83.0197, venuePostalCode: '43210', venueCountry: 'US', venueStateName: 'Ohio', venueStateCode: 'OH', venueCityName: 'Columbus', venueAddressLine1: '411 Woody Hayes Dr', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Columbus Food Truck Fest', url: '/e/1040', categories: ['Food', 'Festival'], venueName: ['Bicentennial Park'], lat: 39.9601, lng: -82.9988, venuePostalCode: '43215', venueCountry: 'US', venueStateName: 'Ohio', venueStateCode: 'OH', venueCityName: 'Columbus', venueAddressLine1: '233 Civic Center Dr', venueAddressLine2: '' },
  // Charlotte
  { source: 'StubHub', name: 'Charlotte Hornets vs Bucks', url: '/e/1041', categories: ['Sports', 'Basketball'], venueName: ['Spectrum Center'], lat: 35.2251, lng: -80.8393, venuePostalCode: '28202', venueCountry: 'US', venueStateName: 'North Carolina', venueStateCode: 'NC', venueCityName: 'Charlotte', venueAddressLine1: '333 E Trade St', venueAddressLine2: '' },
  { source: 'LiveNation', name: 'Charlotte Music Festival', url: '/e/1042', categories: ['Music', 'Festival'], venueName: ['PNC Music Pavilion'], lat: 35.3433, lng: -80.7209, venuePostalCode: '28269', venueCountry: 'US', venueStateName: 'North Carolina', venueStateCode: 'NC', venueCityName: 'Charlotte', venueAddressLine1: '707 Pavilion Blvd', venueAddressLine2: '' },
  // Indianapolis
  { source: 'AXS', name: 'Indianapolis 500 Qualifying', url: '/e/1043', categories: ['Sports', 'Racing'], venueName: ['Indianapolis Motor Speedway'], lat: 39.7953, lng: -86.2353, venuePostalCode: '46222', venueCountry: 'US', venueStateName: 'Indiana', venueStateCode: 'IN', venueCityName: 'Indianapolis', venueAddressLine1: '4790 W 16th St', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Indy Jazz Fest 2026', url: '/e/1044', categories: ['Music', 'Jazz'], venueName: ['White River State Park'], lat: 39.7686, lng: -86.1718, venuePostalCode: '46225', venueCountry: 'US', venueStateName: 'Indiana', venueStateCode: 'IN', venueCityName: 'Indianapolis', venueAddressLine1: '801 W Washington St', venueAddressLine2: '' },
  // Seattle
  { source: 'Ticketmaster', name: 'Seahawks vs Chiefs', url: '/e/1045', categories: ['Sports', 'Football'], venueName: ['Lumen Field'], lat: 47.5952, lng: -122.3316, venuePostalCode: '98134', venueCountry: 'US', venueStateName: 'Washington', venueStateCode: 'WA', venueCityName: 'Seattle', venueAddressLine1: '800 Occidental Ave S', venueAddressLine2: '' },
  { source: 'LiveNation', name: 'Bumbershoot Festival 2026', url: '/e/1046', categories: ['Music', 'Festival'], venueName: ['Seattle Center'], lat: 47.6206, lng: -122.3493, venuePostalCode: '98109', venueCountry: 'US', venueStateName: 'Washington', venueStateCode: 'WA', venueCityName: 'Seattle', venueAddressLine1: '305 Harrison St', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Seattle Beer Festival', url: '/e/1047', categories: ['Food', 'Beer'], venueName: ['Seattle Center'], lat: 47.6206, lng: -122.3493, venuePostalCode: '98109', venueCountry: 'US', venueStateName: 'Washington', venueStateCode: 'WA', venueCityName: 'Seattle', venueAddressLine1: '305 Harrison St', venueAddressLine2: 'Pavilion' },
  // Denver
  { source: 'AXS', name: 'Red Rocks Concert Series', url: '/e/1048', categories: ['Music', 'Concert'], venueName: ['Red Rocks Amphitheatre'], lat: 39.6654, lng: -105.2057, venuePostalCode: '80401', venueCountry: 'US', venueStateName: 'Colorado', venueStateCode: 'CO', venueCityName: 'Morrison', venueAddressLine1: '18300 W Alameda Pkwy', venueAddressLine2: '' },
  { source: 'StubHub', name: 'Colorado Rockies Home Opener', url: '/e/1049', categories: ['Sports', 'Baseball'], venueName: ['Coors Field'], lat: 39.7560, lng: -104.9942, venuePostalCode: '80205', venueCountry: 'US', venueStateName: 'Colorado', venueStateCode: 'CO', venueCityName: 'Denver', venueAddressLine1: '2001 Blake St', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Denver Startup Week 2026', url: '/e/1050', categories: ['Technology', 'Business'], venueName: ['Denver Conv Center'], lat: 39.7432, lng: -104.9960, venuePostalCode: '80202', venueCountry: 'US', venueStateName: 'Colorado', venueStateCode: 'CO', venueCityName: 'Denver', venueAddressLine1: '700 14th St', venueAddressLine2: '' },
  // Nashville
  { source: 'Ticketmaster', name: 'CMA Fest Live 2026', url: '/e/1051', categories: ['Music', 'Country'], venueName: ['Nissan Stadium'], lat: 36.1665, lng: -86.7713, venuePostalCode: '37213', venueCountry: 'US', venueStateName: 'Tennessee', venueStateCode: 'TN', venueCityName: 'Nashville', venueAddressLine1: '1 Titans Way', venueAddressLine2: '' },
  { source: 'LiveNation', name: 'Nashville Predators Playoff', url: '/e/1052', categories: ['Sports', 'Hockey'], venueName: ['Bridgestone Arena'], lat: 36.1592, lng: -86.7785, venuePostalCode: '37219', venueCountry: 'US', venueStateName: 'Tennessee', venueStateCode: 'TN', venueCityName: 'Nashville', venueAddressLine1: '501 Broadway', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Nashville Hot Chicken Fest', url: '/e/1053', categories: ['Food', 'Festival'], venueName: ['Bicentennial Capitol Mall'], lat: 36.1657, lng: -86.7838, venuePostalCode: '37243', venueCountry: 'US', venueStateName: 'Tennessee', venueStateCode: 'TN', venueCityName: 'Nashville', venueAddressLine1: '600 James Robertson Pkwy', venueAddressLine2: '' },
  // Boston
  { source: 'StubHub', name: 'Celtics vs 76ers', url: '/e/1054', categories: ['Sports', 'Basketball'], venueName: ['TD Garden'], lat: 42.3662, lng: -71.0621, venuePostalCode: '02114', venueCountry: 'US', venueStateName: 'Massachusetts', venueStateCode: 'MA', venueCityName: 'Boston', venueAddressLine1: '100 Legends Way', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Boston Marathon Watch Party', url: '/e/1055', categories: ['Sports', 'Running'], venueName: ['Copley Square'], lat: 42.3496, lng: -71.0776, venuePostalCode: '02116', venueCountry: 'US', venueStateName: 'Massachusetts', venueStateCode: 'MA', venueCityName: 'Boston', venueAddressLine1: '560 Boylston St', venueAddressLine2: '' },
  { source: 'LiveNation', name: 'Boston Calling Fest 2026', url: '/e/1056', categories: ['Music', 'Festival'], venueName: ['Harvard Athletic Complex'], lat: 42.3600, lng: -71.1249, venuePostalCode: '02138', venueCountry: 'US', venueStateName: 'Massachusetts', venueStateCode: 'MA', venueCityName: 'Cambridge', venueAddressLine1: '65 N Harvard St', venueAddressLine2: '' },
  // Portland
  { source: 'AXS', name: 'Portland Trail Blazers Night', url: '/e/1057', categories: ['Sports', 'Basketball'], venueName: ['Moda Center'], lat: 45.5316, lng: -122.6668, venuePostalCode: '97232', venueCountry: 'US', venueStateName: 'Oregon', venueStateCode: 'OR', venueCityName: 'Portland', venueAddressLine1: '1 Center Ct', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Portland Rose Festival', url: '/e/1058', categories: ['Culture', 'Festival'], venueName: ['Tom McCall Waterfront Park'], lat: 45.5226, lng: -122.6731, venuePostalCode: '97209', venueCountry: 'US', venueStateName: 'Oregon', venueStateCode: 'OR', venueCityName: 'Portland', venueAddressLine1: '98 SW Naito Pkwy', venueAddressLine2: '' },
  // Miami
  { source: 'Ticketmaster', name: 'Ultra Music Festival 2026', url: '/e/1059', categories: ['Music', 'EDM'], venueName: ['Bayfront Park'], lat: 25.7746, lng: -80.1865, venuePostalCode: '33132', venueCountry: 'US', venueStateName: 'Florida', venueStateCode: 'FL', venueCityName: 'Miami', venueAddressLine1: '301 N Biscayne Blvd', venueAddressLine2: '' },
  { source: 'StubHub', name: 'Heat vs Knicks Playoff', url: '/e/1060', categories: ['Sports', 'Basketball'], venueName: ['Kaseya Center'], lat: 25.7814, lng: -80.1870, venuePostalCode: '33132', venueCountry: 'US', venueStateName: 'Florida', venueStateCode: 'FL', venueCityName: 'Miami', venueAddressLine1: '601 Biscayne Blvd', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Miami Art Basel 2026', url: '/e/1061', categories: ['Art', 'Culture'], venueName: ['Miami Beach Conv Center'], lat: 25.7942, lng: -80.1394, venuePostalCode: '33139', venueCountry: 'US', venueStateName: 'Florida', venueStateCode: 'FL', venueCityName: 'Miami Beach', venueAddressLine1: '1901 Convention Center Dr', venueAddressLine2: '' },
  // Atlanta
  { source: 'LiveNation', name: 'Atlanta Braves Home Opener', url: '/e/1062', categories: ['Sports', 'Baseball'], venueName: ['Truist Park'], lat: 33.8909, lng: -84.4678, venuePostalCode: '30339', venueCountry: 'US', venueStateName: 'Georgia', venueStateCode: 'GA', venueCityName: 'Cumberland', venueAddressLine1: '755 Battery Ave SE', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Atlanta Film Festival', url: '/e/1063', categories: ['Film', 'Culture'], venueName: ['Plaza Theatre'], lat: 33.7716, lng: -84.3494, venuePostalCode: '30307', venueCountry: 'US', venueStateName: 'Georgia', venueStateCode: 'GA', venueCityName: 'Atlanta', venueAddressLine1: '1049 Ponce De Leon Ave NE', venueAddressLine2: '' },
  { source: 'AXS', name: 'Atlanta Jazz Festival', url: '/e/1064', categories: ['Music', 'Jazz'], venueName: ['Piedmont Park'], lat: 33.7886, lng: -84.3743, venuePostalCode: '30309', venueCountry: 'US', venueStateName: 'Georgia', venueStateCode: 'GA', venueCityName: 'Atlanta', venueAddressLine1: '400 Park Dr NE', venueAddressLine2: '' },
  // Minneapolis
  { source: 'StubHub', name: 'Minnesota Wild vs Avalanche', url: '/e/1065', categories: ['Sports', 'Hockey'], venueName: ['Xcel Energy Center'], lat: 44.9449, lng: -93.1008, venuePostalCode: '55102', venueCountry: 'US', venueStateName: 'Minnesota', venueStateCode: 'MN', venueCityName: 'Saint Paul', venueAddressLine1: '199 W Kellogg Blvd', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Minneapolis Art Crawl', url: '/e/1066', categories: ['Art', 'Culture'], venueName: ['North Loop District'], lat: 44.9720, lng: -93.2680, venuePostalCode: '55415', venueCountry: 'US', venueStateName: 'Minnesota', venueStateCode: 'MN', venueCityName: 'Minneapolis', venueAddressLine1: '4 S 6th St', venueAddressLine2: 'North Loop' },
  // New Orleans
  { source: 'Ticketmaster', name: 'Jazz Fest New Orleans 2026', url: '/e/1067', categories: ['Music', 'Jazz'], venueName: ['Fair Grounds Race Course'], lat: 29.9842, lng: -90.0765, venuePostalCode: '70119', venueCountry: 'US', venueStateName: 'Louisiana', venueStateCode: 'LA', venueCityName: 'New Orleans', venueAddressLine1: '1751 Gentilly Blvd', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Mardi Gras Night Parade', url: '/e/1068', categories: ['Culture', 'Festival'], venueName: ['St Charles Ave'], lat: 29.9288, lng: -90.0853, venuePostalCode: '70130', venueCountry: 'US', venueStateName: 'Louisiana', venueStateCode: 'LA', venueCityName: 'New Orleans', venueAddressLine1: '1 St Charles Ave', venueAddressLine2: '' },
  { source: 'LiveNation', name: 'Essence Fest 2026', url: '/e/1069', categories: ['Music', 'Culture'], venueName: ['Caesars Superdome'], lat: 29.9511, lng: -90.0812, venuePostalCode: '70112', venueCountry: 'US', venueStateName: 'Louisiana', venueStateCode: 'LA', venueCityName: 'New Orleans', venueAddressLine1: '1500 Sugar Bowl Dr', venueAddressLine2: '' },
  // Las Vegas
  { source: 'AXS', name: 'Sphere: U2 Experience', url: '/e/1070', categories: ['Music', 'Concert'], venueName: ['The Sphere'], lat: 36.1204, lng: -115.1653, venuePostalCode: '89109', venueCountry: 'US', venueStateName: 'Nevada', venueStateCode: 'NV', venueCityName: 'Las Vegas', venueAddressLine1: '255 Sands Ave', venueAddressLine2: '' },
  { source: 'Ticketmaster', name: 'Vegas Golden Knights Game', url: '/e/1071', categories: ['Sports', 'Hockey'], venueName: ['T-Mobile Arena'], lat: 36.1028, lng: -115.1784, venuePostalCode: '89109', venueCountry: 'US', venueStateName: 'Nevada', venueStateCode: 'NV', venueCityName: 'Las Vegas', venueAddressLine1: '3780 S Las Vegas Blvd', venueAddressLine2: '' },
  { source: 'StubHub', name: 'Formula 1 Las Vegas GP', url: '/e/1072', categories: ['Sports', 'Racing'], venueName: ['Las Vegas Strip Circuit'], lat: 36.1726, lng: -115.1391, venuePostalCode: '89109', venueCountry: 'US', venueStateName: 'Nevada', venueStateCode: 'NV', venueCityName: 'Las Vegas', venueAddressLine1: '3131 S Las Vegas Blvd', venueAddressLine2: '' },
  // Washington DC
  { source: 'Eventbrite', name: 'National Cherry Blossom Gala', url: '/e/1073', categories: ['Culture', 'Festival'], venueName: ['National Mall'], lat: 38.8895, lng: -77.0353, venuePostalCode: '20565', venueCountry: 'US', venueStateName: 'District of Columbia', venueStateCode: 'DC', venueCityName: 'Washington', venueAddressLine1: '900 Jefferson Dr SW', venueAddressLine2: '' },
  { source: 'StubHub', name: 'Capitals vs Rangers Playoff', url: '/e/1074', categories: ['Sports', 'Hockey'], venueName: ['Capital One Arena'], lat: 38.8982, lng: -77.0209, venuePostalCode: '20004', venueCountry: 'US', venueStateName: 'District of Columbia', venueStateCode: 'DC', venueCityName: 'Washington', venueAddressLine1: '601 F St NW', venueAddressLine2: '' },
  { source: 'LiveNation', name: 'National Book Fest 2026', url: '/e/1075', categories: ['Literature', 'Culture'], venueName: ['Washington Conv Center'], lat: 38.9037, lng: -77.0231, venuePostalCode: '20001', venueCountry: 'US', venueStateName: 'District of Columbia', venueStateCode: 'DC', venueCityName: 'Washington', venueAddressLine1: '801 Mount Vernon Pl NW', venueAddressLine2: '' },
  // Detroit
  { source: 'AXS', name: 'Detroit Electronic Music Fest', url: '/e/1076', categories: ['Music', 'Electronic'], venueName: ['Hart Plaza'], lat: 42.3296, lng: -83.0457, venuePostalCode: '48226', venueCountry: 'US', venueStateName: 'Michigan', venueStateCode: 'MI', venueCityName: 'Detroit', venueAddressLine1: '1 Hart Plaza', venueAddressLine2: '' },
  { source: 'StubHub', name: 'Red Wings vs Blackhawks', url: '/e/1077', categories: ['Sports', 'Hockey'], venueName: ['Little Caesars Arena'], lat: 42.3410, lng: -83.0550, venuePostalCode: '48201', venueCountry: 'US', venueStateName: 'Michigan', venueStateCode: 'MI', venueCityName: 'Detroit', venueAddressLine1: '2645 Woodward Ave', venueAddressLine2: '' },
  // Memphis
  { source: 'Eventbrite', name: 'Memphis in May BBQ Fest', url: '/e/1078', categories: ['Food', 'Festival'], venueName: ['Tom Lee Park'], lat: 35.1437, lng: -90.0566, venuePostalCode: '38103', venueCountry: 'US', venueStateName: 'Tennessee', venueStateCode: 'TN', venueCityName: 'Memphis', venueAddressLine1: '170 Front St', venueAddressLine2: '' },
  { source: 'LiveNation', name: 'Beale Street Music Festival', url: '/e/1079', categories: ['Music', 'Blues'], venueName: ['Tom Lee Park'], lat: 35.1437, lng: -90.0566, venuePostalCode: '38103', venueCountry: 'US', venueStateName: 'Tennessee', venueStateCode: 'TN', venueCityName: 'Memphis', venueAddressLine1: '170 Front St', venueAddressLine2: '' },
  // Baltimore
  { source: 'Ticketmaster', name: 'Baltimore Ravens Preseason', url: '/e/1080', categories: ['Sports', 'Football'], venueName: ['M&T Bank Stadium'], lat: 39.2780, lng: -76.6227, venuePostalCode: '21230', venueCountry: 'US', venueStateName: 'Maryland', venueStateCode: 'MD', venueCityName: 'Baltimore', venueAddressLine1: '1101 Russell St', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Baltimore Seafood Festival', url: '/e/1081', categories: ['Food', 'Festival'], venueName: ['Inner Harbor'], lat: 39.2865, lng: -76.6122, venuePostalCode: '21202', venueCountry: 'US', venueStateName: 'Maryland', venueStateCode: 'MD', venueCityName: 'Baltimore', venueAddressLine1: '201 E Pratt St', venueAddressLine2: '' },
  // Oklahoma City
  { source: 'AXS', name: 'OKC Thunder vs Nuggets', url: '/e/1082', categories: ['Sports', 'Basketball'], venueName: ['Paycom Center'], lat: 35.4634, lng: -97.5151, venuePostalCode: '73102', venueCountry: 'US', venueStateName: 'Oklahoma', venueStateCode: 'OK', venueCityName: 'Oklahoma City', venueAddressLine1: '100 W Reno Ave', venueAddressLine2: '' },
  // Milwaukee
  { source: 'StubHub', name: 'Milwaukee Summerfest 2026', url: '/e/1083', categories: ['Music', 'Festival'], venueName: ['Henry Maier Festival Park'], lat: 43.0254, lng: -87.8966, venuePostalCode: '53202', venueCountry: 'US', venueStateName: 'Wisconsin', venueStateCode: 'WI', venueCityName: 'Milwaukee', venueAddressLine1: '200 N Harbor Dr', venueAddressLine2: '' },
  { source: 'Ticketmaster', name: 'Bucks vs Pacers', url: '/e/1084', categories: ['Sports', 'Basketball'], venueName: ['Fiserv Forum'], lat: 43.0450, lng: -87.9170, venuePostalCode: '53203', venueCountry: 'US', venueStateName: 'Wisconsin', venueStateCode: 'WI', venueCityName: 'Milwaukee', venueAddressLine1: '1111 Vel R. Phillips Ave', venueAddressLine2: '' },
  // Kansas City
  { source: 'Eventbrite', name: 'KC Blues & Jazz Festival', url: '/e/1085', categories: ['Music', 'Jazz'], venueName: ['18th & Vine District'], lat: 39.0924, lng: -94.5640, venuePostalCode: '64108', venueCountry: 'US', venueStateName: 'Missouri', venueStateCode: 'MO', venueCityName: 'Kansas City', venueAddressLine1: '1616 E 18th St', venueAddressLine2: '' },
  { source: 'StubHub', name: 'Chiefs Super Bowl Pep Rally', url: '/e/1086', categories: ['Sports', 'Football'], venueName: ['Arrowhead Stadium'], lat: 39.0489, lng: -94.4839, venuePostalCode: '64129', venueCountry: 'US', venueStateName: 'Missouri', venueStateCode: 'MO', venueCityName: 'Kansas City', venueAddressLine1: '1 Arrowhead Dr', venueAddressLine2: '' },
  // Salt Lake City
  { source: 'AXS', name: 'Sundance Film Festival', url: '/e/1087', categories: ['Film', 'Culture'], venueName: ['Eccles Theatre'], lat: 40.7608, lng: -111.8910, venuePostalCode: '84101', venueCountry: 'US', venueStateName: 'Utah', venueStateCode: 'UT', venueCityName: 'Salt Lake City', venueAddressLine1: '131 S Main St', venueAddressLine2: '' },
  { source: 'Ticketmaster', name: 'Utah Jazz vs Timberwolves', url: '/e/1088', categories: ['Sports', 'Basketball'], venueName: ['Delta Center'], lat: 40.7683, lng: -111.9011, venuePostalCode: '84101', venueCountry: 'US', venueStateName: 'Utah', venueStateCode: 'UT', venueCityName: 'Salt Lake City', venueAddressLine1: '301 W South Temple', venueAddressLine2: '' },
  // Pittsburgh
  { source: 'StubHub', name: 'Pittsburgh Penguins Game', url: '/e/1089', categories: ['Sports', 'Hockey'], venueName: ['PPG Paints Arena'], lat: 40.4396, lng: -79.9891, venuePostalCode: '15219', venueCountry: 'US', venueStateName: 'Pennsylvania', venueStateCode: 'PA', venueCityName: 'Pittsburgh', venueAddressLine1: '1001 Fifth Ave', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Three Rivers Arts Festival', url: '/e/1090', categories: ['Art', 'Culture'], venueName: ['Point State Park'], lat: 40.4417, lng: -80.0083, venuePostalCode: '15222', venueCountry: 'US', venueStateName: 'Pennsylvania', venueStateCode: 'PA', venueCityName: 'Pittsburgh', venueAddressLine1: '601 Commonwealth Pl', venueAddressLine2: '' },
  // Cincinnati
  { source: 'LiveNation', name: 'Cincinnati Music Festival', url: '/e/1091', categories: ['Music', 'R&B'], venueName: ['Paycor Stadium'], lat: 39.0954, lng: -84.5161, venuePostalCode: '45202', venueCountry: 'US', venueStateName: 'Ohio', venueStateCode: 'OH', venueCityName: 'Cincinnati', venueAddressLine1: '1 Paul Brown Stadium', venueAddressLine2: '' },
  // Tampa
  { source: 'AXS', name: 'Tampa Bay Lightning Playoff', url: '/e/1092', categories: ['Sports', 'Hockey'], venueName: ['Amalie Arena'], lat: 27.9428, lng: -82.4519, venuePostalCode: '33602', venueCountry: 'US', venueStateName: 'Florida', venueStateCode: 'FL', venueCityName: 'Tampa', venueAddressLine1: '401 Channelside Dr', venueAddressLine2: '' },
  { source: 'Eventbrite', name: 'Gasparilla Pirate Fest', url: '/e/1093', categories: ['Culture', 'Festival'], venueName: ['Tampa Riverwalk'], lat: 27.9442, lng: -82.4576, venuePostalCode: '33602', venueCountry: 'US', venueStateName: 'Florida', venueStateCode: 'FL', venueCityName: 'Tampa', venueAddressLine1: '705 Channelside Dr', venueAddressLine2: '' },
  // Orlando
  { source: 'Ticketmaster', name: 'Electric Daisy Carnival', url: '/e/1094', categories: ['Music', 'EDM'], venueName: ['Tinker Field'], lat: 28.5384, lng: -81.3789, venuePostalCode: '32805', venueCountry: 'US', venueStateName: 'Florida', venueStateCode: 'FL', venueCityName: 'Orlando', venueAddressLine1: '287 Tampa Ave', venueAddressLine2: '' },
  { source: 'StubHub', name: 'Orlando Magic vs Pacers', url: '/e/1095', categories: ['Sports', 'Basketball'], venueName: ['Kia Center'], lat: 28.5392, lng: -81.3839, venuePostalCode: '32801', venueCountry: 'US', venueStateName: 'Florida', venueStateCode: 'FL', venueCityName: 'Orlando', venueAddressLine1: '400 W Church St', venueAddressLine2: '' },
  // Raleigh
  { source: 'Eventbrite', name: 'Hopscotch Music Festival', url: '/e/1096', categories: ['Music', 'Indie'], venueName: ['Red Hat Amphitheater'], lat: 35.7721, lng: -78.6386, venuePostalCode: '27601', venueCountry: 'US', venueStateName: 'North Carolina', venueStateCode: 'NC', venueCityName: 'Raleigh', venueAddressLine1: '500 S McDowell St', venueAddressLine2: '' },
  // Tucson
  { source: 'AXS', name: 'Tucson Gem & Mineral Show', url: '/e/1097', categories: ['Trade Show', 'Science'], venueName: ['Tucson Conv Center'], lat: 32.2218, lng: -110.9747, venuePostalCode: '85701', venueCountry: 'US', venueStateName: 'Arizona', venueStateCode: 'AZ', venueCityName: 'Tucson', venueAddressLine1: '260 S Church Ave', venueAddressLine2: '' },
  // Sacramento
  { source: 'StubHub', name: 'Kings vs Warriors Rivalry', url: '/e/1098', categories: ['Sports', 'Basketball'], venueName: ['Golden 1 Center'], lat: 38.5805, lng: -121.4996, venuePostalCode: '95814', venueCountry: 'US', venueStateName: 'California', venueStateCode: 'CA', venueCityName: 'Sacramento', venueAddressLine1: '500 David J Stern Walk', venueAddressLine2: '' },
  // Cleveland
  { source: 'Eventbrite', name: 'Cleveland Ingenuity Fest', url: '/e/1099', categories: ['Art', 'Technology'], venueName: ['Jacobs Pavilion'], lat: 41.5101, lng: -81.6975, venuePostalCode: '44113', venueCountry: 'US', venueStateName: 'Ohio', venueStateCode: 'OH', venueCityName: 'Cleveland', venueAddressLine1: '1001 Erieside Ave', venueAddressLine2: '' },
  // St. Louis
  { source: 'Ticketmaster', name: 'St. Louis Cardinals Opener', url: '/e/1100', categories: ['Sports', 'Baseball'], venueName: ['Busch Stadium'], lat: 38.6226, lng: -90.1928, venuePostalCode: '63102', venueCountry: 'US', venueStateName: 'Missouri', venueStateCode: 'MO', venueCityName: 'St. Louis', venueAddressLine1: '700 Clark Ave', venueAddressLine2: '' },
];

const esc = (s: string) => s.replace(/'/g, "''");
const pgArr = (arr: string[]) => `ARRAY[${arr.map(s => `'${esc(s)}'`).join(',')}]`;

const seedDates = [
  '2026-03-15', '2026-03-17', '2026-03-19', '2026-03-21', '2026-03-22',
  '2026-03-24', '2026-03-26', '2026-03-28', '2026-03-30', '2026-04-01',
  '2026-04-03', '2026-04-05', '2026-04-07', '2026-04-10', '2026-04-15',
];

const groups = [
  { name: 'NYC Music Lovers', description: 'A group for music fans in New York City', categories: ['Music', 'Pop', 'Jazz'], city: 'New York', country: 'US' },
  { name: 'LA Sports Club', description: 'Sports enthusiasts in Los Angeles', categories: ['Sports', 'Basketball', 'Baseball'], city: 'Los Angeles', country: 'US' },
  { name: 'Chicago Food & Culture', description: 'Exploring food and culture in Chicago', categories: ['Food', 'Culture', 'Festival'], city: 'Chicago', country: 'US' },
  { name: 'Austin Tech & Music', description: 'Tech professionals who love live music in Austin', categories: ['Technology', 'Music', 'Festival'], city: 'Austin', country: 'US' },
  { name: 'Seattle Outdoor & Arts', description: 'Outdoor events and arts scene in Seattle', categories: ['Art', 'Culture', 'Music'], city: 'Seattle', country: 'US' },
  { name: 'Miami Nightlife Crew', description: 'EDM and nightlife enthusiasts in Miami', categories: ['Music', 'EDM', 'Culture'], city: 'Miami', country: 'US' },
  { name: 'Denver Adventure Squad', description: 'Concert-goers and sports fans in Denver', categories: ['Music', 'Sports', 'Concert'], city: 'Denver', country: 'US' },
  { name: 'Nashville Country Circle', description: 'Country music and food festival fans in Nashville', categories: ['Music', 'Country', 'Food'], city: 'Nashville', country: 'US' },
  { name: 'Boston Sports & Comedy', description: 'Sports and comedy fans around Boston', categories: ['Sports', 'Comedy', 'Basketball'], city: 'Boston', country: 'US' },
  { name: 'SF Bay Area Tech Events', description: 'Technology conferences and innovation events in San Francisco', categories: ['Technology', 'Conference', 'Business'], city: 'San Francisco', country: 'US' },
];

async function main() {
  console.log(`Seeding ${events.length} events...`);
  for (let idx = 0; idx < events.length; idx++) {
    const e = events[idx];
    const startDate = e.startDate ?? seedDates[idx % seedDates.length];
    await prisma.$executeRawUnsafe(`
      INSERT INTO "Event" (source, name, url, categories, "venueName", location, "venuePostalCode", "venueCountry", "venueStateName", "venueStateCode", "venueCityName", "venueAddressLine1", "venueAddressLine2", "startDate")
      VALUES (
        '${esc(e.source)}',
        '${esc(e.name)}',
        '${esc(e.url)}',
        ${pgArr(e.categories)},
        ${pgArr(e.venueName)},
        ST_SetSRID(ST_MakePoint(${e.lng}, ${e.lat}), 4326),
        '${esc(e.venuePostalCode)}',
        '${esc(e.venueCountry)}',
        '${esc(e.venueStateName)}',
        '${esc(e.venueStateCode)}',
        '${esc(e.venueCityName)}',
        '${esc(e.venueAddressLine1)}',
        '${esc(e.venueAddressLine2)}',
        '${startDate}'::timestamp
      )
    `);
    process.stdout.write('.');
  }
  console.log(`\nDone. Inserted ${events.length} events.`);

  console.log(`Seeding ${groups.length} groups...`);
  for (const g of groups) {
    await prisma.group.upsert({
      where: { name: g.name },
      update: {},
      create: g,
    });
    process.stdout.write('.');
  }
  console.log(`\nDone. Inserted ${groups.length} groups.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
