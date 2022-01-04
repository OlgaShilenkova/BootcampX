SELECT day as day , COUNT(*) as total_assignments
FROM assignments
GROUP BY day
ORDER BY day;