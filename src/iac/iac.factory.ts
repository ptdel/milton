import { ConfigService } from '@nestjs/config';
import { LocalWorkspace, PulumiFn, Workspace } from '@pulumi/pulumi/automation';

export enum WorkspaceType {
  Local = 'local',
  Remote = 'remote',
  //   AWS = 'aws',
  //   Azure = 'azure',
  //   GCP = 'gcp',
}

export class WorkspaceFactory {
  /**
   * A factory for producing workspace instances
   *
   * @remarks the `RemoteWorkspace` is currently in preview, and will eventually
   * allow people to reference settings that are in a git repository. Regarding
   * `stackSettings.backend.url`, it could be useful to give each stack it's own
   * backend rather than having all projects in one.
   *
   * @param configService - nestjs config service
   * @param workspaceType - the type of workspace to create
   */
  constructor(
    private readonly configService: ConfigService,
    private readonly workspaceType: WorkspaceType,
  ) {}

  async new(program?: PulumiFn /*, backend?: string */): Promise<Workspace> {
    switch (this.workspaceType) {
      case WorkspaceType.Local:
        const workspace = LocalWorkspace.create({
          program,
          secretsProvider: this.configService.get<string>('app.secrets'),
          projectSettings: {
            name: this.configService.get<string>('app.name'),
            runtime: 'nodejs',
            backend: {
              url: this.configService.get<string>('app.backend'),
            },
          },
          //stackSettings: {
          //     backend: {
          // 	  url: backend
          //     }
          //}
        });
        return workspace;
      // case WorkspaceType.Remote:
      //   break;
    }
  }
}
