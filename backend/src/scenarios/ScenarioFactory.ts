import { TouristInfoScenario } from './tourist'
import { HotelReceptionScenario } from './hotel'
import { TrainStationScenario } from './train'
import { DentistScenario} from './Dentist'
import { Scenario } from './Scenario'

export class ScenarioFactory {
  static createScenario(scenario: string): Scenario {
    switch (scenario) {
      case 'supermarket':
        return new SupermarketScenario()
      case 'restaurant':
        return new RestaurantScenario()
      case 'train station':
        return new TrainStationScenario()
      default:
        throw new Error(`Scenario "${scenario}" not found.`)
    }
  }
}
