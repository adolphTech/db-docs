---
sidebar_position: 3
---

### balance_date
- **Description:** the date of the balance
- **Example:** 20240814
- **Type:** varchar(255)

### account_number
- **Description:** the account number
- **Example:** 1234567890
- **Type:** varchar(255) 

### daily_fcy_bal
- **Description:** 
- **Example:** 
- **Type:** 

### daily_lcy_bal
- **Description:** The balance as per that day
- **Example:** 2518.56
- **Type:** decimal(22,3)

### cumulative_bal_fcy
- **Description:** 
- **Example:** 
- **Type:** 

### cumulative_bal_lcy
- **Description:** olumn accumulates the daily balances for the entire month. It starts fresh each month, so on the first day of each month, `CUMULATIVE_BAL_LCY` is equal to `DAILY_LCY_BAL` , and the accumulation begins again from there.
- **Example:** 68001.12
- **Type:** decimal(22,3)

### num_days
- **Description:** 
- **Example:** 
- **Type:** 

### txn_value_fcy
- **Description:** 
- **Example:** 
- **Type:** 

### txn_value_lcy
- **Description:** 
- **Example:** 
- **Type:** 

### fcy_credit_turnover
- **Description:** 
- **Example:** 
- **Type:** 

### fcy_debit_turnover
- **Description:** 
- **Example:** 
- **Type:** 

### lcy_credit_turnover
- **Description:** 
- **Example:** 
- **Type:** 

### lcy_debit_turnover
- **Description:** 
- **Example:** 
- **Type:** 

### currency
- **Description:** currency of the balance
- **Example:** KES
- **Type:** varchar(255)

### av_bal_date
- **Description:** timestamp of the balance
- **Example:** " 2024-08-14 00:00:00.000"
- **Type:** timestamp

### co_code
- **Description:** 
- **Example:** 
- **Type:** 

### exchange_rate
- **Description:** 
- **Example:** 
- **Type:** 

### customer_number
- **Description:** The customer identifier (base number)
- **Example:** 123456
- **Type:** varchar(255)

### prev_day_bal_lcy
- **Description:** The balance from the previous day.
- **Example:** 2518.56
- **Type:** decimal(22,3)

### prev_day_bal_fcy
- **Description:** 
- **Example:** 
- **Type:** 
