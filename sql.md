WITH quarters AS (SELECT color, iso3 FROM final_stage WHERE stage = '1')
SELECT * FROM quarters