DROP INDEX `url_images_idx` ON `notworking_events_images`;--> statement-breakpoint
CREATE INDEX `url_idx` ON `notworking_events_images` (`url`);--> statement-breakpoint
ALTER TABLE `notworking_events_event` DROP COLUMN `clerk_id`;