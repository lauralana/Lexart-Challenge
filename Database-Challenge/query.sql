DROP TABLE IF EXISTS 'AverageLifeExpectancy'

CREATE TABLE AverageLifeExpectancy AS
(SELECT
	COALESCE(ROUND(AVG(country.LifeExpectancy)), 0) AS 'LifeProm',
	  country.Continent AS 'Region'
	FROM country
    WHERE Continent IN ('South America','North America','Asia')
	GROUP BY Continent 
	ORDER BY Continent DESC);
