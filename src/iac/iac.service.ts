import { ConflictException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  LocalWorkspace,
  PulumiFn,
  StackAlreadyExistsError,
  UpResult,
} from '@pulumi/pulumi/automation';
import { faker as f } from '@faker-js/faker';

@Injectable()
export class IacService {
  /**
   * A Service for Interacting with Pulumi.
   */
  constructor(private readonly configService: ConfigService) {}

  async createStack(program: PulumiFn): Promise<UpResult> {
    /**
     * Given a `stackName` and `program` as inputs, this function will
     * attempt to invoke the program, and return the outputs that are the
     * result of that invocation. We give the stack a humorous name.
     *
     * @remarks
     * `program` here is a generic term for some function that encapsulates
     * creating some pulumi resources.  Typically this would be the body of
     * code that is managed by the CLI.
     *
     * @param program - a function that creates resources with pulumi.
     * @param args - input parameters for the pulumi program
     *
     * @returns a map of the pulumi resource's outputs.
     */
    const stackName = `${f.company.buzzAdjective()}-${f.company.buzzNoun()}`
      .toLowerCase()
      .replace(' ', '-');
    try {
      const stack = await LocalWorkspace.createStack({
        projectName: this.configService.get<string>('app.name'),
        stackName,
        program,
      });
      const result = await stack.up({ onOutput: console.info });
      return result;
    } catch (e) {
      if (e instanceof StackAlreadyExistsError) {
        throw new ConflictException('Stack already exists');
      } else {
        throw e;
      }
    }
  }

  async listStacks(): Promise<void> {}
}
