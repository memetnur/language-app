import { TouristInfoScenario } from './tourist'
import { HotelReceptionScenario } from './hotel'
import { TrainStationScenario } from './train'
import { DentistScenario} from './Dentist'
import { Scenario } from './Scenario'

export class ScenarioFactory {
  static createScenario(scenario: string): Scenario {
    switch (scenario) {
      case 'Hotel':
        return new HotelReceptionScenario()
      case 'Train':
        return new TrainStationScenario()
      case 'Dentist':
        return new DentistScenario()
      case 'Tourist':
        return new TouristInfoScenario()
      default:
        throw new Error(`Scenario "${scenario}" not found.`)
    }
  }
}
