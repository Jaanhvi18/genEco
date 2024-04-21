
# pseudo code for carbon foot print calcultor

class CarbonFootprintCalculator:
    
    def __init__(self, energy, location, conversion_factor, power_loss_coefficient):
        
        self.energy = energy
        
        self.location = location
        
        self.conversion_factor = conversion_factor
        
        self.power_loss_coefficient = power_loss_coefficient

    def adjusted_power_loss(self):
        return self.energy_consumed * self.power_loss_coefficient

    def convert_carbon(self, adjusted_energy):
        lbs_to_kg = 0.453592
       
        mwh_to_kwh = 1000
        
        kg_co2_per_kwh = (self.conversion_factor * lbs_to_kg) / mwh_to_kwh
      
        return adjusted_energy * kg_co2_per_kwh

    def calculate_total(self):
        
        adjusted = self.adjust_for_power_loss()
       
        total = self.convert_carbon(adjusted)
        return total

   
    def optmization_check(self):
        recommendations = []

        if self.power_loss_coefficient > 1.05:
  
            recommendations.append("Consider upgrading to more efficient power delivery systems to reduce loss including hardware, infrasturcture, platform, model")
        
        if self.conversion_factor > 1000:
            recommendations.append("Explore renewable energy sources")

        return recommendations 

def main():
    #exmaple using the data from  
    energy = 100 

    location = "Pittsburgh, PA"

    conversion_factor = 1046.1  # in lbs CO2/MWh

    power_loss_coefficient = 1.059
    
    calculator = CarbonFootprintCalculator(energy, location, conversion_factor, power_loss_coefficient)

    total_emissions = calculator.calculate_total()

    print(f"Total CO2 emissions for the operation: {total_emissions:.2f} kg CO2")

    print(f'Recommandation')

if __name__ == "__main__":
    main()
