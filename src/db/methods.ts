import db from './config'
import { usersTable } from './schema'
import { eq } from 'drizzle-orm'

export async function checkUser(user_id: number): Promise<boolean> {
  const result = await db
    .insert(usersTable)
    .values({ user_id })
    .onConflictDoNothing()
    .run()

  return result.rowsAffected === 0
}

export async function getBalance(user_id: number) {
  const result = await db
    .select({ balance: usersTable.balance })
    .from(usersTable)
    .where(eq(usersTable.user_id, user_id))
    .execute()

  if (!result[0]) {
    return 0
  }

  return result[0].balance
}

export async function setBalance(
  user_id: number,
  amount: number
): Promise<number> {
  await db
    .update(usersTable)
    .set({ balance: amount })
    .where(eq(usersTable.user_id, user_id))
    .execute()
  return amount
}
