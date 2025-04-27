import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs/promises'

@Injectable()
export class AppService implements OnApplicationBootstrap{
  
  mockDbCache: {[ssn: string]: (Omit<InvestorFormInput, "ssn">) & {file: string} } = {} 

  async onApplicationBootstrap(): Promise<void> {
    const mockDbFilePath = path.join(process.cwd(), "/mock", "mockDb.json")
    console.log('MOCKDB FILE PATH: ', mockDbFilePath)
    try {
      await fs.access(mockDbFilePath)
      const mockDbContent = await fs.readFile(mockDbFilePath, 'utf8') 
      this.mockDbCache = JSON.parse(mockDbContent)

    } catch(error) {
      console.error("ERROR LOADING MOCK DB: ", error)  
    }
  }

  private async syncToDisk() {
    const mockDbFilePath = path.join(process.cwd(), "/mock", "mockDb.json")
    try {
      await fs.writeFile(mockDbFilePath, JSON.stringify(this.mockDbCache), 'utf8')
    } catch(error) {
      console.error("ERROR TO SYNC CACHE TO DISK: ", error)
    }
  }

  setCaheEntry({firstName, lastName, dob, phoneNumber, street, state, zip, ssn, file}: InvestorFormInput & {file: string} ) {
    console.log('seeting entry: ', ssn)
    this.mockDbCache[ssn] = {firstName, lastName, dob, phoneNumber, street, state, zip, file}
    this.syncToDisk()
  }


}
