import { ConflictException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  LocalWorkspace,
  PulumiFn,
  StackAlreadyExistsError,
  StackSummary,
  UpResult,
} from '@pulumi/pulumi/automation';
import { faker as f } from '@faker-js/faker';
import { WorkspaceFactory, WorkspaceType } from './iac.factory';

@Injectable()
export class IacService {
  private readonly factory: WorkspaceFactory;
  /**
   * A Service for Interacting with Pulumi.
   */
  constructor(private readonly configService: ConfigService) {
      this.factory = new WorkspaceFactory(this.configService, WorkspaceType.Local)
  }

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
      const workspace = await this.factory.new(program)
      const stack = await workspace.createStack(stackName, program);
      const result = 
      return result;
    } catch (e) {
      if (e instanceof StackAlreadyExistsError) {
        throw new ConflictException('Stack already exists');
      } else {
        throw e;
      }
    }
  }

  async listStacks(): Promise<StackSummary[]> {
    /**
     *
     */
    try {
      const workspace = await LocalWorkspace.create({
        projectSettings: {
          name: this.configService.get<string>('app.name'),
          runtime: 'nodejs',
        },
      });
      const stacks = await workspace.listStacks();
      return stacks;
    } catch (e) {
      throw e;
    }
  }
}
