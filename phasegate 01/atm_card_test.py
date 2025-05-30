import unittest
from atm_card import atm_card,create_atm
from atm_card import atm_card,visa_atm
from atm_card import atm_card,master_atm_card
from atm_card import atm_card,discover_atm_card
from atm_card import atm_card,american_express_atm_card

class Testatm_card (unittest.TestCase):
	def test_set_up(self):
		global atm_card
		atm_card = []

	def test_create_atm_is_created(self):
		atm_number = "4576789043453456"
		create_atm(atm_number)

	def test_visa_atm_is_created(self):
		atm_number = "4567890457868907"
		visa_atm(atm_number)

	def test_visa_atm_is_not_more_than_16_digits(self):
		atm_number = "234545673896456756"
		visa_atm(atm_number)

	def test_vis_atm_must_have_the_valid_first_digit(self):
		atm_number = "4578456345678923"
		visa_atm(atm_number)

	def test_master_card_is_created(self):
		atm_number = "5674893727862345"
		master_atm_card(atm_number)

	def test_master_card_is_not_more_than_16_digits(self):
		atm_number = "2345678908538987896"
		master_atm_card(atm_number)

	def test_master_atm_card_must_have_the_valid_first_digit(self):
		atm_number = "5578456345678923"
		master_atm_card(atm_number)

	def test_discover_atm_card_is_created(self):
		atm_number = "6573456734564356"
		discover_atm_card(atm_number)

	def test_discover_atm_card_is_not_more_than_16_digits(self):
		atm_number = "67893547894678390745"
		discover_atm_card(atm_number)

	def test_american_express_atm_card_must_have_the_valid_first_digit(self):
		atm_number = "357845634567892"
		american_express_atm_card(atm_number)

	def test_american_express_atm_card_is_created(self):
		atm_number = "357345673456435"
		american_express_atm_card(atm_number)

	def test_discover_atm_card_is_not_more_than_15_digits(self):
		atm_number = "37893547894678390745"
		american_express_atm_card(atm_number)

	def test_american_atm_card_must_have_the_valid_first_digit(self):
		atm_number = "357845634567892"
		american_express_atm_card(atm_number)


	