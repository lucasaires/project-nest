export abstract class RbbMembersRepository {
  abstract create(name: string, position: string): Promise<void>;
}
