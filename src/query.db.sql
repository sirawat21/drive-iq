-- ###########################################################################
--                  Query Expected Infomation
-- ###########################################################################
SELECT 
   BROKER.NAME,
   COUNT(CUSTOMER.BROKER_ID) AS "CUSTOMER_COUNT"
FROM BROKER
   INNER JOIN CUSTOMER
      ON BROKER.ID = CUSTOMER.BROKER_ID
   GROUP BY BROKER.ID
   ORDER BY CUSTOMER_COUNT DESC, BROKER.NAME ASC;