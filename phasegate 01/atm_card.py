atm_card = []
def create_atm(atm_number):
	atm = [atm_number]
	atm_card.append(atm)
	return atm

def visa_atm(atm_number):
	try:
		atm_number = str(atm_number)
		if len(atm_number) != 16:
			print('Invalid Card Number. Please A Valid Card Number must satisfy the the conditions here. Reason: Invalid Length')
			return atm_number
		elif (1, len(atm_number)) !=4:
			print('Invalid Number. first digit must be 4 Please')
		else: 
			print ('Valid: True, issuer :  Visa')
	except ValueError:
		print('Invalid Number. ATM card Number must be a Number or Digit')
		return atm_number

def master_atm_card(atm_number):
	try:
		atm_number = str(atm_number)
		if len(atm_number) != 16:
			print('Invalid Card Number. Please A Valid Card Number must satisfy the the conditions here. Reason: Invalid Length')
			return atm_number
		elif (1, len(atm_number)) !=5:
			print('Invalid Number. first digit must be 5 Please')
		else: 
			print ('Valid: True, issuer :  Master card')
	except ValueError:
		print('Invalid Number. ATM card Number must be a Number or Digit')
		return atm_number

def discover_atm_card(atm_number):
	try:
		atm_number = str(atm_number)
		if len(atm_number) != 16:
			print('Invalid Card Number. Please A Valid Card Number must satisfy the the conditions here. Reason: Invalid Length')
			return atm_number
		elif (1, len(atm_number)) !=6:
			print('Invalid Number. first digit must be 6 Please')
		else: 
			print ('Valid: True, issuer :  Discover card')
	except ValueError:
		print('Invalid Number. ATM card Number must be a Number or Digit')
		return atm_number

def american_express_atm_card(atm_number):
	try:
		atm_number = str(atm_number)
		if len(atm_number) != 15:
			print('Invalid Card Number. Please A Valid Card Number must satisfy the the conditions here. Reason: Invalid Length')
			return atm_number
		elif (1, len(atm_number)) != 3:
			print('Invalid Number. first digit must be 3 Please')
		else: 
			print ('Valid: True, issuer :  American Express card')
	except ValueError:
		print('Invalid Number. ATM card Number must be a Number or Digit')
		return atm_number



	
	

			

