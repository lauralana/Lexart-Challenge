DROP TABLE IF EXISTS 'AverageLifeExpectancy'

CREATE TABLE AverageLifeExpectancy AS
	(SELECT
	COALESCE(ROUND(AVG(country.LifeExpectancy)), 0) AS 'LifeProm',
	  country.Region AS 'Region'
	FROM country
	GROUP BY country.Region)
;